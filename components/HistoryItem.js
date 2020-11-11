import React from 'react';
import { Text, View } from 'react-native';

import { Colors } from '../utils/colors';

import IconCopy from '../assets/icons/copy.svg';

import Card from './Card';

const HistoryItem = ({ id, source, translation, transcription }) => (
  <Card styles={{ marginTop: 15 }}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 16, fontFamily: 'FiraSans-Regular' }}>
            {translation}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <Text
            style={{
              fontFamily: 'FiraSans-Medium',
              fontSize: 18,
              marginRight: 5,
            }}>
            {source}
          </Text>
          <Text style={{ fontFamily: 'FiraSans-Regular', color: '#C4C4C4' }}>
            - /{transcription}/
          </Text>
        </View>
      </View>
      <IconCopy style={{ color: Colors.PRIMARY }} />
    </View>
  </Card>
);

export default HistoryItem;
