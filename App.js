/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, View } from 'react-native';

import Navigation from './components/Navigation';

import HomeScreen from './screens/HomeScreen';
// import TranslationScreen from './screens/TranslationScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
      {/* <TranslationScreen /> */}
      <Navigation />
    </>
  );
};

export default App;
