import Text from '../utility/Text';
import { SpellCard } from '../../data/interfaces/spellCard.interface';
import { ItemCard } from '../../data/interfaces/itemCard.interface';
import { useParams } from 'react-router-native';

interface CardListProps {
  data: Array<SpellCard | ItemCard>;
}

const CardList = ({ data }: CardListProps): JSX.Element => {
  const filter: string = useParams().filter;

  const cards = JSON.stringify(data, null, 2);

  return (
    <>
      <Text>{cards}</Text>
      <Text>Hello {filter === 'all' ? null : filter}</Text>
    </>
  );
};

export default CardList;
