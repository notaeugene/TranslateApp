import React from 'react';
import { Text, View } from 'react-native';

import Card from './Card';

const HistoryItem = ({ id, source, translation, transcription }) => (
  <Card styles={{ marginTop: 15 }}>
    <View style={{ marginBottom: 5 }}>
      <Text>{translation}</Text>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
      <Text style={{ fontWeight: '500', fontSize: 18, marginRight: 5 }}>
        {source}
      </Text>
      <Text style={{ color: '#C4C4C4' }}>- /{transcription}/</Text>
    </View>
  </Card>
);

export default HistoryItem;
