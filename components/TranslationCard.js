import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

import IconVolume from '../assets/icons/volume.svg';

import { Languages } from '../utils/constants';

const TranslationCard = ({ translation, transcription, nouns, verbs }) => (
  <View style={styles.wrapper}>
    <Svg style={styles.background}>
      <Defs>
        <LinearGradient id="grad" x1="0.5" x2="0.5" y2="1">
          <Stop offset="0" stopColor="#298CFF" />
          <Stop offset="1" stopColor="#29BDFF" />
        </LinearGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
    </Svg>
    <View style={styles.card}>
      <IconVolume style={styles.speaker} />
      <View style={styles.content}>
        <Text style={styles.transcription}>
          {translation}
          {transcription ? ` - ${transcription}` : null}
        </Text>
        {nouns.length ? (
          <View style={styles.translationRow}>
            <Text style={styles.pos}>noun:</Text>
            <Text style={styles.translations}>{nouns.join(', ')}</Text>
          </View>
        ) : null}
        {verbs.length ? (
          <View style={styles.translationRow}>
            <Text style={styles.pos}>verb:</Text>
            <Text style={styles.translations}>{verbs.join(', ')}</Text>
          </View>
        ) : null}
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 30,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  card: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  background: {
    position: 'absolute',
  },
  speaker: { marginTop: 2, marginRight: 15, color: '#fff' },
  content: { flex: 1 },
  transcription: {
    fontSize: 18,
    fontFamily: 'FiraSans-Regular',
    color: '#fff',
  },
  translationRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  pos: {
    fontSize: 18,
    fontFamily: 'FiraSans-Medium',
    color: '#fff',
  },
  translations: {
    fontSize: 18,
    fontFamily: 'FiraSans-Regular',
    color: '#fff',
    marginLeft: 5,
  },
});

export default TranslationCard;
