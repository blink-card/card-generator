import { View } from 'react-native';
import Theme from '../../config/themes';

const VerticalSeparator = (): JSX.Element => (
  <View
    style={{
      height: '100%',
      width: 1,
      backgroundColor: Theme.colors.separator,
    }}
  />
);

export default VerticalSeparator;
