import {
  Alert,
  Platform,
  SafeAreaView,
  StyleSheet,
  UIManager,
  View,
} from 'react-native';
import { SpellCard } from '../../data/interfaces/spellCard.interface';
import { ItemCard } from '../../data/interfaces/itemCard.interface';
import Text from '../utility/Text';
import { useEffect } from 'react';
import { AccordionList } from 'react-native-accordion-list-view';
import SpellCardDetails from './SpellCardDetails';
import ItemCardDetails from './ItemCardDetails';

interface CardListContainerProps {
  data: Array<SpellCard | ItemCard>;
  filter?: string;
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    height: '100%',
    backgroundColor: '#e7e7e7',
  },
  separator: {
    height: 10,
  },
});

const renderClosedCard = (title: string): JSX.Element => (
  <SafeAreaView>
    <Text fontSize="subheading" fontWeight="bold">
      {title}
    </Text>
  </SafeAreaView>
);

const renderOpenCard = ({ ...card }: SpellCard | ItemCard): JSX.Element => {
  switch (card.cardType) {
    case 'spell':
      return <SpellCardDetails card={card as SpellCard} />;
    case 'item':
      return <ItemCardDetails card={card as ItemCard} />;
    default:
      Alert.alert('Coś poszło nie tak');
      break;
  }
};

const CardListContainer = ({
  ...props
}: CardListContainerProps): JSX.Element => {
  // Accordion works with Layout Animation and in order
  // to get this to work on Android this flags must be set beforehand.
  useEffect((): void => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental)
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  /* TODO: FILTERING THE LIST SHOULD HAPPEN HERE
   *  BEFORE PASSING TO THE FLAT LIST RENDER !
   *  NOTE: AFTER SWITCHING TO ACCORDION PERHAPS
   *  DELEGATE FILTERING TO PARENT */

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AccordionList
          data={props.data}
          customTitle={(item): JSX.Element => renderClosedCard(item.title)}
          customBody={(item): JSX.Element => renderOpenCard(item)}
          animationDuration={400}
          expandMultiple={true}
        />
      </View>
    </SafeAreaView>
  );
};
export default CardListContainer;
