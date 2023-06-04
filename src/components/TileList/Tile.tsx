import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '../utility/Text';
import DefaultTheme from '../../themes/default';
import { useNavigate } from 'react-router-native';
import { useCallback } from 'react';

interface TileProps {
  title: string;
  description: string;
  style: {
    width: number;
    height: number;
    margin: number;
  };
  path: string;
  filter?: string;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultTheme.colors.tileBackground,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
  },
  tile: {
    margin: 4,
  },
});

const Tile = ({ ...props }: TileProps): JSX.Element => {
  const navigate = useNavigate();
  const handleNavigate = useCallback(
    () => navigate(props.path, { replace: true }),
    [navigate, props.path],
  );

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{ ...styles.container, ...props.style }}
        onPress={(): void => handleNavigate()}
      >
        <SafeAreaView style={styles.tile}>
          <Text>{props.title}</Text>
          <Text>{props.description}</Text>
        </SafeAreaView>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Tile;
