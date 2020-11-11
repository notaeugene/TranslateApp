import React from 'react';
import { FlatList, View } from 'react-native';

import { SPACING } from '../utils/constants';

import Heading from './Heading';
import ExampleItem from './ExampleItem';

const Examples = ({ items }) => (
  <View style={{ flex: 1 }}>
    <Heading text="Examples" style={{ paddingHorizontal: SPACING }} />
    <FlatList
      data={items}
      renderItem={({ item }) => <ExampleItem {...item} />}
      keyExtractor={(item) => String(item.id)}
      style={{ paddingHorizontal: SPACING }}
    />
  </View>
);

export default Examples;
