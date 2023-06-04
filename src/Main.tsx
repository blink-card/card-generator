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
import CardList from './components/CardList';
import mockCardsData from './data/mockCards.data';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: DefaultTheme.colors.background,
  },
});

const Main = (): JSX.Element => {
  const [mockSpellCards, mockItemCards] = mockCardsData;

  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={<PlaceholderElement exampleText="Ulubione" />}
        />
        <Route path="/spells" element={<TileList tiles={spellTiles} />} />
        <Route path="/items" element={<TileList tiles={itemTiles} />} />
        <Route path="/add-spell" element={<AddCard cardType="spell" />} />
        <Route path="/add-item" element={<AddCard cardType="item" />} />
        <Route
          path="/spell-list/:filter"
          element={<CardList data={mockSpellCards} />}
        />
        <Route
          path="/item-list/:filter"
          element={<CardList data={mockItemCards} />}
        />
      </Routes>
    </SafeAreaView>
  );
};

export default Main;
