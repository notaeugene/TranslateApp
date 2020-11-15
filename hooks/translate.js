import useFetch from 'use-http';

import config from '../config/config';

const { FIREBASE_FUNCTIONS_URI } = config;

/**
 * Get translation by query params
 */
function getByParams(get) {
  return (from, to, word) => get(`?from=${from}&to=${to}&word=${word}`);
}

/**
 * Make an http call to the word translation
 */
export default function useTranslate() {
  const { get, response, loading, error } = useFetch(
    `${FIREBASE_FUNCTIONS_URI}/translateFromTo`,
  );

  return {
    get: getByParams(get),
    response,
    loading,
    error,
  };
}
