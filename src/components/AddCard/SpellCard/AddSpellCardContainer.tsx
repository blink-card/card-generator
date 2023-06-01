import { Formik } from 'formik';
import { FormikSubmit } from '../AddCard';
import { SpellCard } from '../../../data/interfaces/spellCard.interface';
import AddSpellCardForm from './AddSpellCardForm';
import * as Yup from 'yup';
import { DndSchool } from '../../../data/enums/dndSchool.enum';
import { DndClass } from '../../../data/enums/dndClass.enum';

const AddSpellCardContainer = ({ onSubmit }: FormikSubmit): JSX.Element => {
  const initialValues: SpellCard = {
    title: '',
    cardType: 'spell',
    description: '',
    source: '',
    isFavourite: false,
    school: undefined,
    spellLevel: undefined,
    isRitual: false,
    castingTime: '',
    range: '',
    materialComponent: false,
    semanticComponent: false,
    verbalComponent: false,
    materialComponentDetails: '',
    duration: '',
    concentration: false,
    classes: [DndClass.BARBARIAN, DndClass.CLERIC],
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Podaj nazwę przedmiotu.'),
    cardType: Yup.string().matches(/spell/),
    description: Yup.string().required('Podaj opis przedmiotu.'),
    source: Yup.string().optional(),
    school: Yup.mixed<DndSchool>()
      .oneOf(Object.values(DndSchool))
      .required('Podaj szkołę magii do której należy zaklęcie.'),
    spellLevel: Yup.string().matches(/^(?:sztuczka|[0-9])$/i, {
      message: 'Podaj cyfrę od 1 do 9 lub "Sztuczka".',
    }),
    isRitual: Yup.boolean().required('Zaznacz czy zaklęcie jest rytuałem.'),
    castingTime: Yup.string().required(
      'Podaj czas rzucania zaklęcia, np.: "1 akcja".',
    ),
    range: Yup.string().required('Podaj zasięg zaklęcia, np.: 27 metrów'),
    materialComponent: Yup.boolean().required(
      'Zaznacz czy zaklęcie wymaga komponentów materialnych.',
    ),
    semanticComponent: Yup.boolean().required(
      'Zaznacz czy zaklęcie wymaga komponentów somatycznych.',
    ),
    verbalComponent: Yup.boolean().required(
      'Zaznacz czy zaklęcie wymaga komponentów webalnych.',
    ),
    materialComponentDetails: Yup.string().when('materialComponent', values => {
      if (values[0]) {
        return Yup.string().required(
          'Podaj opis i wartość komponentów materialnych',
        );
      } else {
        return Yup.string().notRequired();
      }
    }),
    duration: Yup.string().required(
      'Podaj czas trwania zaklęcia, np.: "1 godzina".',
    ),
    concentration: Yup.boolean().required(
      'Zaznacz czy zaklęcie wymaga koncentracji.',
    ),
    classes: Yup.array()
      .of(Yup.mixed<DndClass>().oneOf(Object.values(DndClass)))
      .required('Podaj klasy, które mogą korzystać z zaklęcia.'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }): JSX.Element => (
        <AddSpellCardForm onSubmit={(): void => handleSubmit()} />
      )}
    </Formik>
  );
};

export default AddSpellCardContainer;
