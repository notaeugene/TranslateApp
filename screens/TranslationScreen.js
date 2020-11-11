import React from 'react';
import { SafeAreaView, View } from 'react-native';

import IconArrowLeft from '../assets/icons/arrow-left.svg';

import { SPACING } from '../utils/constants';

import TranslationContainer from '../containers/TranslationContainer';

const TranslationScreen = () => (
  <View style={{ flex: 1 }}>
    <SafeAreaView>
      <View style={{ paddingHorizontal: SPACING }}>
        <IconArrowLeft
          style={{ marginTop: 30, marginBottom: 45, color: '#000' }}
        />
      </View>
    </SafeAreaView>
    <TranslationContainer />
  </View>
);

export default TranslationScreen;
