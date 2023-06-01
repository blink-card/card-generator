import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import DefaultTheme from './themes/default';
import { Route, Routes } from 'react-router-native';
import AppBar from './components/AppBar';
import TileList from './components/TileList';
import { itemTiles } from './data/itemTiles.data';
import { spellTiles } from './data/spellTiles.data';
import PlaceholderElement from './components/utility/PlaceholderElement';
import AddCard from './components/AddCard';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: DefaultTheme.colors.background,
  },
});

const Main = (): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <AppBar />
    <Routes>
      <Route path="/" element={<PlaceholderElement exampleText="Ulubione" />} />
      <Route path="/spells" element={<TileList tiles={spellTiles} />} />
      <Route path="/items" element={<TileList tiles={itemTiles} />} />
      <Route path="/add-card" element={<AddCard />} />
    </Routes>
  </SafeAreaView>
);
export default Main;
