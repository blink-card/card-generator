import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Tile from './Tile';
import { TileDetails } from '../../data/interfaces/tileDetails.interface';

interface TileListProps {
  tiles: Array<TileDetails>;
}

const styles = StyleSheet.create({
  separator: {
    height: 4,
  },
});

const ItemSeparator = (): JSX.Element => <View style={styles.separator} />;
const numColumns = 2;
const singleTileMargin = 8;
const screenWidth =
  Dimensions.get('window').width - 2 * numColumns * singleTileMargin;
const tileSize = screenWidth / numColumns;

const TileList = ({ ...props }: TileListProps): JSX.Element => {
  const [tiles, setTiles] = useState([]);
  useEffect(() => {
    setTiles(props.tiles);
  }, [props.tiles]);

  return (
    <FlatList
      data={tiles}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }): JSX.Element => (
        <Tile
          title={item.title}
          description={item.description}
          style={{
            width: tileSize,
            height: tileSize,
            margin: singleTileMargin,
          }}
          path={item.path}
        />
      )}
      numColumns={numColumns}
      key={numColumns}
    />
  );
};

export default TileList;
