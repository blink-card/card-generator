import { SpellCard } from '../../data/interfaces/spellCard.interface';
import { ItemCard } from '../../data/interfaces/itemCard.interface';
import Text from '../utility/Text';
import { Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { useState } from 'react';

interface CardListItemProps {
  card: SpellCard | ItemCard;
  type: string;
}

const styles = StyleSheet.create({
  closedCard: {
    backgroundColor: 'grey',
    alignItems: 'flex-start',
    marginVertical: 12,
  },
  closedCardText: {
    padding: 16,
  },
});

const CardListItem = ({ ...props }: CardListItemProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const renderClosedCard = (title: string): JSX.Element => (
    <SafeAreaView style={styles.closedCard}>
      <Text style={styles.closedCardText}>{title}</Text>
    </SafeAreaView>
  );
  const renderOpenCard = ({ ...card }: SpellCard | ItemCard): JSX.Element => (
    <SafeAreaView>
      <Text>{card.title}</Text>
      <Text>{card.description}</Text>
    </SafeAreaView>
  );
  return (
    <>
      <Pressable onPress={(): void => setIsOpened(!isOpened)}>
        {isOpened
          ? renderOpenCard(props.card)
          : renderClosedCard(props.card.title)}
      </Pressable>
    </>
  );
};

export default CardListItem;
