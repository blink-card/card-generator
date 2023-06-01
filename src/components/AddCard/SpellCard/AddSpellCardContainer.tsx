import { Formik } from 'formik';
import { FormikSubmit } from '../AddCard';
import { SpellCard } from '../../../data/interfaces/spellCard.interface';
import AddSpellCardForm from './AddSpellCardForm';

const AddSpellCardContainer = ({ onSubmit }: FormikSubmit): JSX.Element => {
  const initialValues: SpellCard = {
    cardType: 'spell',
    castingTime: '',
    classes: undefined,
    components: { material: undefined, semantic: false, verbal: false },
    concentration: false,
    description: '',
    duration: '',
    isFavourite: false,
    isRitual: false,
    range: '',
    school: undefined,
    source: '',
    spellLevel: undefined,
    title: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }): JSX.Element => (
        <AddSpellCardForm onSubmit={(): void => handleSubmit()} />
      )}
    </Formik>
  );
};

export default AddSpellCardContainer;
