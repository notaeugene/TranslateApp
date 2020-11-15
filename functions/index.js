const got = require('got');
const functions = require('firebase-functions');
const { JSDOM } = require('jsdom');

const LANG_DICT = {
  ru: 'russian',
  en: 'english',
};

function getOneElem(dom, selector) {
  return dom.window.document.querySelector(selector);
}

function getAllElems(dom, selector) {
  return Array.from(dom.window.document.querySelectorAll(selector));
}

function getElText(el) {
  return el.textContent.trim();
}

/**
 * Translate text
 */
exports.translateFromTo = functions.https.onRequest(async (req, res) => {
  const { from, to, word } = req.query;
  const fromTo = `${LANG_DICT[from]}-${LANG_DICT[to]}`;
  const url = `https://context.reverso.net/translation/${fromTo}/${word}`;

  let html;

  try {
    const { body } = await got(url);
    html = body;
  } catch (err) {
    if (err.response.statusCode === 404) {
      res.send({
        error: 'Not Found',
        code: 404,
        message: 'No translations found',
      });
    } else {
      res.send({
        error: 'Bad Gateway',
        code: 502,
      });
    }

    return;
  }

  const dom = new JSDOM(html);

  const translation = getElText(
    getOneElem(dom, '#translations-content').firstElementChild,
  );
  const nouns = getAllElems(dom, '.dict.n').map(getElText);
  const verbs = getAllElems(dom, '.dict.v').map(getElText);
  const adjectives = getAllElems(dom, '.dict.adj').map(getElText);

  let transcription = '';
  let audio = '';

  if (to === 'en') {
    const response = await got(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${translation}`,
      { responseType: 'json' },
    );

    console.log(response.body);

    const entry = response.body[0];
    const phonetics = entry.phonetics[0];

    transcription = phonetics.text;
    audio = phonetics.audio;
  }

  const result = {
    transcription,
    audio,
    translation,
    adjectives,
    nouns,
    verbs,
  };

  res.send(result);
});
