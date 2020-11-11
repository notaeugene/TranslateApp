import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Colors } from '../utils/colors';

import IconArrowForward from '../assets/icons/arrow-forward.svg';
import IconSwap from '../assets/icons/swap.svg';

import Card from './Card';

const Translator = () => {
  const [text, setText] = useState('');

  return (
    <Card styles={styles.card}>
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <Text style={styles.language}>English</Text>
          <IconArrowForward style={styles.iconForward} />
          <Text style={styles.language}>Russian</Text>
        </View>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Enter a word to translate"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <View style={styles.buttonSwap}>
        <IconSwap style={styles.iconSwap} />
      </View>
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
  iconForward: { color: '#f0b23c' },
  iconSwap: { color: '#fff' },
  textInput: {
    height: 50,
    paddingHorizontal: 24,
    fontSize: 16,
    fontFamily: 'FiraSans-Regular',
  },
  buttonSwap: {
    position: 'absolute',
    right: 20,
    bottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.PRIMARY,
  },
});

export default Translator;
