import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-ionicons';

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
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          name="ios-list"
          style={{ fontSize: 18, color: '#ADADAD', marginRight: 8 }}
        />
        <Text style={{ fontWeight: '500', color: '#ADADAD' }}>History</Text>
      </View>
      <FlatList
        data={HISTORY_DATA}
        renderItem={({ item }) => <HistoryItem {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HistoryContainer;
