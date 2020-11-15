import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import _debounce from 'lodash.debounce';

import { Colors } from '../utils/colors';
import { Languages } from '../utils/constants';

import IconArrowForward from '../assets/icons/arrow-forward.svg';
import IconSwap from '../assets/icons/swap.svg';

import Card from './Card';

const Translator = ({
  text,
  from,
  to,
  onTranslate,
  onChangeText,
  onChangeLang,
}) => {
  const [showButtonTranslate, setShowButtonTranslate] = useState(false);

  const slideRightAnim = useRef(new Animated.Value(-20)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const changeTextCallback = (text) => {
    if (!showButtonTranslate) {
      setShowButtonTranslate(true);
    }

    onChangeText(text);
  };
  const handleChangeText = useCallback(_debounce(changeTextCallback, 500), []);

  const handleTranslate = () => {
    setShowButtonTranslate(false);
    onTranslate();
  };

  const onSwapLang = () => {
    if (from.code === Languages.EN.code) {
      onChangeLang({ from: Languages.RU, to: Languages.EN });
    } else {
      onChangeLang({ from: Languages.EN, to: Languages.RU });
    }
  };

  useEffect(() => {
    if (showButtonTranslate) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 250,
          useNativeDriver: false,
        }),
        Animated.timing(slideRightAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [showButtonTranslate]);

  return (
    <Card styles={styles.card}>
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <Text style={styles.language}>{from.text}</Text>
          <IconArrowForward style={styles.iconForward} />
          <Text style={styles.language}>{to.text}</Text>
        </View>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Enter a word to translate"
        onChangeText={handleChangeText}
        defaultValue={text}
      />
      {showButtonTranslate && (
        <Animated.View
          style={[
            styles.buttonTranslateWrapper,
            { opacity: fadeAnim, marginRight: slideRightAnim },
          ]}>
          <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="#ddd"
            style={styles.buttonTranslateTouchableHighlight}
            onPress={handleTranslate}>
            <View style={styles.buttonTranslate}>
              <Text style={styles.buttonTranslateText}>Translate</Text>
            </View>
          </TouchableHighlight>
        </Animated.View>
      )}
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor="#ddd"
        onPress={onSwapLang}
        style={styles.buttonSwapWrapper}>
        <View style={styles.buttonSwap}>
          <IconSwap style={styles.iconSwap} />
        </View>
      </TouchableHighlight>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 192,
    marginBottom: 32,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  headerWrapper: {
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1,
  },
  header: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  language: {
    fontSize: 18,
    fontFamily: 'FiraSans-Medium',
    color: Colors.PRIMARY,
  },
  iconForward: {
    position: 'absolute',
    left: '50%',
    marginLeft: 10,
    color: '#f0b23c',
  },
  iconSwap: { color: '#fff' },
  textInput: {
    height: 50,
    paddingHorizontal: 24,
    fontSize: 16,
    fontFamily: 'FiraSans-Regular',
  },
  buttonTranslateWrapper: {
    position: 'absolute',
    right: 48,
    bottom: 15,
  },
  buttonTranslateTouchableHighlight: {
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
  },
  buttonTranslate: {
    width: 144,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
    backgroundColor: '#EAF4FF',
  },
  buttonTranslateText: {
    fontFamily: 'FiraSans-Medium',
    fontSize: 16,
    color: Colors.PRIMARY,
  },
  buttonSwapWrapper: {
    position: 'absolute',
    right: 20,
    bottom: 15,
    borderRadius: 24,
  },
  buttonSwap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.PRIMARY,
  },
});

export default Translator;
