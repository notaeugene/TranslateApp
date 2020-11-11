import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { SPACING } from '../utils/constants';

import IconList from '../assets/icons/list.svg';

import HistoryItem from '../components/HistoryItem';

const HISTORY_DATA = [
  {
    id: 1,
    source: 'Belongings',
    translation: 'Вещи',
    transcription: 'bɪˈlɒŋ.ɪŋz',
  },
  {
    id: 2,
    source: 'Miscellaneous',
    translation: 'Различные',
    transcription: 'ˌmɪs.əlˈeɪ.ni.əs',
  },
  {
    id: 3,
    source: 'Envy',
    translation: 'Завидовать',
    transcription: '‘en.vi',
  },
  {
    id: 4,
    source: 'Polished',
    translation: 'Отполированный',
    transcription: 'ˈpɒl.ɪʃt',
  },
];

const HistoryContainer = () => {
  return (
    <View
      style={{
        marginTop: 15,
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SPACING,
        }}>
        <IconList style={{ marginRight: 8, color: '#ADADAD' }} />
        <Text
          style={{
            fontFamily: 'FiraSans-Medium',
            fontSize: 16,
            color: '#ADADAD',
          }}>
          History
        </Text>
      </View>
      <FlatList
        data={HISTORY_DATA}
        renderItem={({ item }) => <HistoryItem {...item} />}
        keyExtractor={(item) => String(item.id)}
        style={{ paddingHorizontal: SPACING }}
      />
    </View>
  );
};

export default HistoryContainer;
