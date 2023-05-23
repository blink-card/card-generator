import { StyleSheet, View } from 'react-native';
import Theme from '../../themes/default';

const style = StyleSheet.create({
  separator: {
    height: '100%',
    width: 1,
    backgroundColor: Theme.colors.separator,
  },
});

const VerticalSeparator = (): JSX.Element => <View style={style.separator} />;

export default VerticalSeparator;
