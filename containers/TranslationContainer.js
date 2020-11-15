import React from 'react';
import { View } from 'react-native';

import { SPACING } from '../utils/constants';

import IconStar from '../assets/icons/star.svg';

import Heading from '../components/Heading';
import TranslationCard from '../components/TranslationCard';
import Examples from '../components/Examples';

const TRANSLATION_DATA = {
  translation: 'envy',
  transcription: '/ˈen.vi/',
  nouns: ['зависть'],
  verbs: ['завидовать', 'позавидовать'],
};

const EXAMPLES_DATA = [
  {
    id: 1,
    source: {
      sentence: 'I’m afraid we’ll envy Alexa soon enough',
      wordMatch: 'envy',
    },
    translation: {
      sentence: 'Боюсь, скоро мы все будем завидовать Алексе.',
      wordMatch: 'завидовать',
    },
  },
  {
    id: 2,
    source: {
      sentence: 'Afterwards, the living will envy the dead.',
      wordMatch: 'envy',
    },
    translation: {
      sentence: 'После этого, живущие станут завидовать мертвым.',
      wordMatch: 'завидовать',
    },
  },
  {
    id: 3,
    source: {
      sentence: 'I envy her, especially today',
      wordMatch: 'envy',
    },
    translation: {
      sentence: 'Что ж, я ей завидую, особенно сегодня.',
      wordMatch: 'завидую',
    },
  },
];

const TranslationContainer = () => (
  <>
    <View style={{ paddingHorizontal: SPACING }}>
      <View
        style={{
          marginBottom: 15,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Heading text={'Envy'} style={{ marginRight: 15 }} />
        <IconStar style={{ color: '#C4C4C4' }} />
      </View>
      <TranslationCard {...TRANSLATION_DATA} />
    </View>
    <Examples items={EXAMPLES_DATA} />
  </>
);

export default TranslationContainer;
