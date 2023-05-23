import { ScrollView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import Theme from '../../themes/default';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingVertical: Constants.statusBarHeight * 0.5,
    paddingHorizontal: Constants.statusBarHeight * 0.25,
    backgroundColor: Theme.colors.navBackground,
    flexDirection: 'row',
  },
});

const AppBar = (): JSX.Element => (
  <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab path="/" label="Ulubione" />
      <AppBarTab path="/spells" label="Zaklęcia" />
      <AppBarTab path="/items" label="Przedmioty" />
    </ScrollView>
  </View>
);

export default AppBar;
