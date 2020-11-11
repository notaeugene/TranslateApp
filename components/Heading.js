import React from 'react';
import { Text } from 'react-native';

const Heading = ({ text, style }) => (
  <Text style={{ fontFamily: 'FiraSans-Medium', fontSize: 28, ...style }}>
    {text}
  </Text>
);

export default Heading;
