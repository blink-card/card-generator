import { StyleSheet, View } from 'react-native';
import Text from './components/utility/Text';
import React from 'react';
import Theme from './config/themes';
import { Route, Routes } from 'react-router-native';
import AppBar from './components/AppBar';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: Theme.colors.background,
  },
});

const ExampleElement = (): JSX.Element => (
  <View>
    <Text>Hello World!</Text>
  </View>
);

const Main = (): JSX.Element => (
  <View style={styles.container}>
    <AppBar />
    <Routes>
      <Route path="/" element={<ExampleElement />} />
    </Routes>
  </View>
);

export default Main;
