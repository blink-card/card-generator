import { Pressable, SafeAreaView } from 'react-native';
import FormikTextInput from '../../utility/FormikTextInput';
import Text from '../../utility/Text';
import { FormikSubmit } from '../AddCard';

const AddSpellCardForm = ({ onSubmit }: FormikSubmit): JSX.Element => (
  <SafeAreaView>
    <FormikTextInput name="title" placeholder="Nazwa zaklęcia" />
    <FormikTextInput name="description" placeholder="Opis zaklęcia" />
    <FormikTextInput
      name="source"
      placeholder="Z jakiej książki pochodzi przedmiot?"
    />
    <FormikTextInput name="school" placeholder="List: Szkoła zaklęcia" />
    <FormikTextInput name="spellLevel" placeholder="Poziom zaklęcia" />
    <FormikTextInput
      name="isRitual"
      placeholder="Checkbox: Czy zaklęcie jest rytuałem"
    />
    <FormikTextInput name="castingTime" placeholder="Czas rzucania zaklęcia" />
    <FormikTextInput name="range" placeholder="Zasięg zaklęcia" />
    <FormikTextInput
      name="materialComponent"
      placeholder="Checkbox: Komponenty materialne"
    />
    <FormikTextInput
      name="semanticComponent"
      placeholder="Checkbox: Komponenty somatyczne"
    />
    <FormikTextInput
      name="verbalComponent"
      placeholder="Checkbox: Komponenty werbalne"
    />
    <FormikTextInput
      name="materialComponentDetails"
      placeholder="Opis i wartość komponentów materialnych"
    />
    <FormikTextInput name="concentration" placeholder="Checkbox: Koncetracja" />
    <FormikTextInput name="duration" placeholder="Czas trwania zaklęcia" />
    <FormikTextInput
      name="classes"
      placeholder="List: Klasy mogące korzystać z zaklęcia"
    />

    <Pressable onPress={onSubmit}>
      <Text fontWeight="bold">Save Spell</Text>
    </Pressable>
  </SafeAreaView>
);

export default AddSpellCardForm;
