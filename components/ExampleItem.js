import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../utils/colors';

import IconVolume from '../assets/icons/volume.svg';
import IconStar from '../assets/icons/star.svg';
import IconCopy from '../assets/icons/copy.svg';
import IconSave from '../assets/icons/save.svg';

import Card from './Card';

const ExampleItem = ({ source, translation }) => (
  <Card styles={styles.card}>
    <Text style={styles.sourceSentence}>{source.sentence}</Text>
    <Text style={styles.translatedSentence}>{translation.sentence}</Text>
    <View style={styles.controls}>
      <IconVolume styles={styles.controlIcon} />
      <IconStar styles={styles.controlIcon} />
      <IconCopy styles={styles.controlIcon} />
      <IconSave styles={styles.controlIcon} />
    </View>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
  },
  sourceSentence: {
    color: '#C4C4C4',
    fontFamily: 'FiraSans-Regular',
    fontSize: 16,
    marginBottom: 15,
  },
  translatedSentence: {
    fontFamily: 'FiraSans-Regular',
    color: '#000',
    fontSize: 16,
    marginBottom: 15,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopColor: '#EFEFEF',
    borderTopWidth: 1,
    paddingTop: 15,
  },
  controlIcon: {
    color: Colors.PRIMARY,
  },
});

export default ExampleItem;
