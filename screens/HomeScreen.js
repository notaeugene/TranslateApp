/**
 * @flow
 */

import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

import HistoryContainer from '../containers/HistoryContainer';

import Translator from '../components/Translator';

const HomeScreen = () => (
  <>
    <Header />
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <Translator />
      <HistoryContainer />
    </SafeAreaView>
  </>
);

const Header = () => (
  <View>
    <Svg
      width="199.788"
      height="267.533"
      viewBox="0 0 199.788 267.533"
      style={{
        position: 'absolute',
        top: 0,
        left: -80,
      }}>
      <Defs>
        <LinearGradient
          id="blueGradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox">
          <Stop offset="0" stopColor="#42caea" />
          <Stop offset="0.483" stopColor="#298cff" />
          <Stop offset="1" stopColor="#4229ff" />
        </LinearGradient>
      </Defs>
      <Path
        d="M-60.909,239.849C9.959,258.015,58.1,270.621,71.718,217.738S45.7,109.535,49.092,60.6s58.822-72.579,58.822-72.579H-58.824S-131.777,221.683-60.909,239.849Z"
        transform="translate(91.874 11.975)"
        fill="url(#blueGradient)"
      />
    </Svg>
    <View
      style={{
        paddingTop: 80,
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <Image
        source={require('../assets/img/logo.png')}
        style={{ marginRight: 15 }}
      />
      <Text style={{ fontWeight: '500', fontSize: 28, marginBottom: 50 }}>
        Translate
      </Text>
    </View>
    <Svg
      width="156.68"
      height="221.524"
      viewBox="0 0 156.68 221.524"
      style={{ position: 'absolute', top: 60, right: -100 }}>
      <Defs>
        <LinearGradient
          id="orangeGradient"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#ffe765" />
          <Stop offset={1} stopColor="#e5562b" />
        </LinearGradient>
      </Defs>
      <Path
        d="M433.179 206.386s-135.2-69.572-129.742-161.234S459.955-6.4 459.955-6.4z"
        transform="translate(-303.276 15.138)"
        fill="url(#orangeGradient)"
      />
    </Svg>
  </View>
);

export default HomeScreen;
