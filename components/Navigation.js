import React from 'react';
import { Dimensions, View } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

import IconCalendar from '../assets/icons/calendar.svg';
import IconUser from '../assets/icons/user.svg';
import IconMic from '../assets/icons/mic.svg';

const Navigation = () => (
  <View
    style={{
      height: 70,
      backgroundColor: '#fff',
      borderRadius: 24,
      shadowOffset: { width: 0, height: -3 },
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 15,
      borderRadius: 45,
    }}>
    <View
      style={{
        paddingTop: 20,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <IconCalendar style={{ marginLeft: -30, color: '#ADADAD' }} />
      <View
        style={{
          width: 70,
          height: 70,
          position: 'absolute',
          top: -25,
          left: Dimensions.get('window').width / 2 - 35,
          borderRadius: 35,
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Svg height="100%" width="100%">
          <Defs>
            <LinearGradient id="grad" x1="0.5" x2="0" y2="0.5">
              <Stop offset="0" stopColor="#2994FF" />
              <Stop offset="1" stopColor="#42EAEA" />
            </LinearGradient>
          </Defs>
          <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
        </Svg>
        <IconMic
          style={{ position: 'absolute', fontSize: 36, color: '#fff' }}
        />
      </View>
      <IconUser style={{ marginRight: -30, color: '#ADADAD' }} />
    </View>
  </View>
);

export default Navigation;
