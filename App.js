/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeScreen style={{ fontFamily: 'FiraSans-Regular' }} />
    </>
  );
};

export default App;
