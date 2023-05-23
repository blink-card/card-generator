import { SafeAreaView, StyleSheet } from 'react-native';
import Text from '../utility/Text';
import DefaultTheme from '../../themes/default';

interface TileProps {
  title: string;
  description: string;
  style: {
    width: number;
    height: number;
    margin: number;
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultTheme.colors.tileBackground,
    borderRadius: 8,
    borderWidth: 1,
  },
  tile: {
    margin: 4,
  },
});

const Tile = ({ ...props }: TileProps): JSX.Element => (
  <SafeAreaView style={{ ...styles.container, ...props.style }}>
    <SafeAreaView style={styles.tile}>
      <Text>{props.title}</Text>
      <Text>{props.description}</Text>
    </SafeAreaView>
  </SafeAreaView>
);

export default Tile;
