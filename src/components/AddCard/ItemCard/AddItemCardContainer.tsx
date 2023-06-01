import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormikSubmit } from '../AddCard';
import AddItemCardForm from './AddItemCardForm';
import { ItemCard } from '../../../data/interfaces/itemCard.interface';
import { DndRarity } from '../../../data/enums/dndRarity.enum';

const AddItemCardContainer = ({ onSubmit }: FormikSubmit): JSX.Element => {
  const initialValues: ItemCard = {
    title: '',
    cardType: 'item',
    description: '',
    source: '',
    isFavourite: false,
    isWondrous: false,
    type: '',
    rarity: undefined,
    requiresAttunement: false,
    attunementDetails: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Podaj nazwę przedmiotu.'),
    cardType: Yup.string().matches(/item/),
    description: Yup.string().required('Podaj opis przedmiotu.'),
    source: Yup.string().optional(),
    isWondrous: Yup.boolean().required('Zaznacz czy przedmiot jest cudowny.'),
    type: Yup.string().required('Podaj typ przedmiotu, np. broń krótka.'),
    rarity: Yup.mixed<DndRarity>()
      .oneOf(Object.values(DndRarity))
      .required('Podaj rzadkość przedmiotu.'),
    requiresAttunement: Yup.boolean(),
    attunementDetails: Yup.string().when('requiresAttunement', values => {
      if (values[0]) {
        return Yup.string().required('Podaj szczegóły procesu zestrojenia');
      } else {
        return Yup.string().notRequired();
      }
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }): JSX.Element => (
        <AddItemCardForm onSubmit={(): void => handleSubmit()} />
      )}
    </Formik>
  );
};

export default AddItemCardContainer;
