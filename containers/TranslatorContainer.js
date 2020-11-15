import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Animated, Text } from 'react-native';

import TranslationCard from '../components/TranslationCard';
import Translator from '../components/Translator';

import useTranslate from '../hooks/translate';

import { SPACING, Languages } from '../utils/constants';

const TranslatorContainer = () => {
  const [word, setWord] = useState('');
  const [lang, setLang] = useState({ from: Languages.EN, to: Languages.RU });

  const [showTranslation, setShowTranslation] = useState(false);
  const [translation, setTranslation] = useState(null);

  const slideOutAnim = useRef(new Animated.Value(-20)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const translate = useTranslate();

  const slideOutTranslationCard = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.timing(slideOutAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handleTranslate = () => {
    if (word.length) {
      const loadTranslation = async () => {
        const translation = await translate.get(
          lang.from.code,
          lang.to.code,
          word,
        );

        if (translate.response.ok) {
          setTranslation(translation);

          if (!showTranslation) {
            setShowTranslation(true);
            slideOutTranslationCard();
          }
        }
      };

      loadTranslation();
      // TODO: store translation history in AsyncStorage
    }
  };

  const handleChangeLang = (lang) => {
    if (translation) {
      const prevWord = word;
      setWord(translation.translation);
      setTranslation({ ...translation, translation: prevWord });
    }

    setLang(lang);
  };

  useEffect(() => {
    handleTranslate();
  }, [lang]);

  return (
    <>
      <Translator
        from={lang.from}
        to={lang.to}
        text={word}
        onTranslate={handleTranslate}
        onChangeText={setWord}
        onChangeLang={handleChangeLang}
      />
      {showTranslation &&
        (translate.loading ? (
          <ActivityIndicator />
        ) : (
          <Animated.View
            style={{
              opacity: fadeAnim,
              marginTop: slideOutAnim,
              width: '100%',
              paddingHorizontal: SPACING,
            }}>
            <TranslationCard {...translation} />
          </Animated.View>
        ))}
    </>
  );
};

export default TranslatorContainer;
