import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from '../utility/Text';
import VerticalSeparator from '../utility/VerticalSeparator';

interface AppBarTabProps {
  path: string;
  label: string;
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexGrow: 0,
  },
});

const AppBarTab = (props: AppBarTabProps): JSX.Element => (
  <>
    <Link to={props.path} style={styles.container}>
      <Text fontWeight="bold" fontSize="subheading" color="textWhite">
        {props.label}
      </Text>
    </Link>
    <VerticalSeparator />
  </>
);

export default AppBarTab;
