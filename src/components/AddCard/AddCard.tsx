import { FormikValues } from 'formik';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import AddItemCardContainer from './ItemCard/AddItemCardContainer';
import AddSpellCardContainer from './SpellCard/AddSpellCardContainer';
import { implementedCards } from '../../data/interfaces/_card.interface';
import Text from '../utility/Text';

export type FormikSubmit = {
  onSubmit: (values: FormikValues) => void;
};

const styles = StyleSheet.create({
  scrollView: {
    margin: '3%',
  },
  text: {
    textAlign: 'left',
    paddingVertical: 16,
  },
});

interface AddCardProps {
  cardType: implementedCards;
}

const AddCard = ({ cardType }: AddCardProps): JSX.Element => {
  const onSubmit = (values: FormikValues): void =>
    console.log(JSON.stringify(values, null, 2));

  const titleStringToRender = `Dodaj ${
    cardType === 'spell' ? 'nowe zaklęcie' : 'nowy przedmiot'
  }!`;

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView>
        <Text
          color="textSecondary"
          fontSize="header"
          fontWeight="bold"
          style={styles.text}
        >
          {titleStringToRender}
        </Text>
        {cardType === 'spell' ? (
          <AddSpellCardContainer onSubmit={onSubmit} />
        ) : (
          <AddItemCardContainer onSubmit={onSubmit} />
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default AddCard;
