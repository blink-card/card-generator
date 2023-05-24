import { View } from 'react-native';
import Text from './Text';
import React from 'react';

const PlaceholderElement = (props: { exampleText: string }): JSX.Element => (
  <View>
    <Text>{`Witaj ${props.exampleText}`}</Text>
  </View>
);

export default PlaceholderElement;
