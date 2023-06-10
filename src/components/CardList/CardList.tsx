import { SpellCard } from '../../data/interfaces/spellCard.interface';
import { ItemCard } from '../../data/interfaces/itemCard.interface';
import { useParams } from 'react-router-native';
import CardListContainer from './CardListContainer';

interface CardListProps {
  data: Array<SpellCard | ItemCard>;
}

const CardList = ({ data }: CardListProps): JSX.Element => {
  const filter: string = useParams().filter;

  return <CardListContainer data={data} filter={filter} />;
};

export default CardList;
