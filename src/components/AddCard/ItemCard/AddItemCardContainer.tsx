import { Formik } from 'formik';
import { FormikSubmit } from '../AddCard';
import AddItemCardForm from './AddItemCardForm';
import { ItemCard } from '../../../data/interfaces/itemCard.interface';

const AddItemCardContainer = ({ onSubmit }: FormikSubmit): JSX.Element => {
  const initialValues: ItemCard = {
    attunementDetails: '',
    cardType: 'item',
    description: '',
    isFavourite: false,
    isWondrous: false,
    rarity: undefined,
    requiresAttunement: false,
    source: '',
    title: '',
    type: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }): JSX.Element => (
        <AddItemCardForm onSubmit={(): void => handleSubmit()} />
      )}
    </Formik>
  );
};

export default AddItemCardContainer;
