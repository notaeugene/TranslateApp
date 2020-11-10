import React from 'react';
import { Text } from 'react-native';

const Heading = ({ children }) => (
  <Text style={{ fontWeight: '500', fontSize: 28 }}>{children}</Text>
);

export default Heading;
