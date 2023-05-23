import { ScrollView, StyleSheet, View } from 'react-native';
import Theme from '../../config/themes';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.navBackground,
    flexDirection: 'row',
  },
});

const AppBar = (): JSX.Element => (
  <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab path="/" label="Ulubione" />
      <AppBarTab path="/" label="Zaklęcia" />
      <AppBarTab path="/" label="Przedmioty" />
    </ScrollView>
  </View>
);

export default AppBar;