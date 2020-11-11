import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import IconVolume from '../assets/icons/volume.svg';

import { Colors } from '../utils/colors';

const TranslationCard = ({ translation }) => (
  <View style={styles.card}>
    <IconVolume style={styles.speaker} />
    <View>
      <Text style={styles.transcription}>/{translation.transcription}/</Text>
      <View style={styles.translationRow}>
        <Text style={styles.strong}>noun</Text>
        <Text style={styles.translations}>
          - {translation.nouns.join(', ')}
        </Text>
      </View>
      <View style={styles.translationRow}>
        <Text style={styles.strong}>verb</Text>
        <Text style={styles.translations}>
          - {translation.verbs.join(', ')}
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginBottom: 30,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
  },
  speaker: { marginTop: 2, marginRight: 15, color: '#fff' },
  transcription: {
    fontSize: 18,
    fontFamily: 'FiraSans-Regular',
    color: '#fff',
  },
  translationRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 10,
  },
  strong: {
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
