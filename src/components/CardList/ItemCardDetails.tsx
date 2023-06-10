import { SafeAreaView } from 'react-native';
import Text from '../utility/Text';
import { ItemCard } from '../../data/interfaces/itemCard.interface';

interface ItemCardDetailsProps {
  card: ItemCard;
}

const ItemCardDetails = ({ card }: ItemCardDetailsProps): JSX.Element => {
  const foo = 'bar';

  return (
    <SafeAreaView>
      <Text>{card.title}</Text>
      <Text>{card.description}</Text>
      <Text>{card.rarity}</Text>
    </SafeAreaView>
  );
};

export default ItemCardDetails;
