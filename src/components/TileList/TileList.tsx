import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import Text from '../utility/Text';

type tileData = { title: string; description: string };

const spellTiles: Array<tileData> = [
  {
    title: 'Add',
    description: 'addSpell',
  },
  {
    title: 'Class',
    description: 'filterSpellsByClass',
  },
  {
    title: 'School',
    description: 'filterSpellsBySchool',
  },
  {
    title: 'All',
    description: 'listAllSpells',
  },
];
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
const ItemSeparator = (): JSX.Element => <View style={styles.separator} />;

const TileList = (): JSX.Element => (
  <FlatList
    data={spellTiles}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={({ item }): JSX.Element => <Text> {item.title}</Text>}
  />
);

export default TileList;
