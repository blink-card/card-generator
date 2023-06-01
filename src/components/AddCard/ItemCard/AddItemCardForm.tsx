import { Pressable, SafeAreaView } from 'react-native';
import FormikTextInput from '../../utility/FormikTextInput';
import Text from '../../utility/Text';
import { FormikSubmit } from '../AddCard';

const AddItemCardForm = ({ onSubmit }: FormikSubmit): JSX.Element => (
  <SafeAreaView>
    <FormikTextInput name="title" placeholder="Nazwa przedmiotu" />
    <FormikTextInput name="description" placeholder="Opis przedmiotu" />
    <FormikTextInput
      name="source"
      placeholder="Z jakiej książki pochodzi przedmiot?"
    />
    <FormikTextInput
      name="isWondrous"
      placeholder="Checkbox: Czy przedmiot jest cudowny?"
    />
    <FormikTextInput name="type" placeholder="Typ przedmiotu" />
    <FormikTextInput
      name="rarity"
      placeholder="List: Jak rzadki jest przedmiot?"
    />
    <FormikTextInput
      name="requiresAttunement"
      placeholder="Checkbox: Czy wymaga zestrojenia?"
    />
    <FormikTextInput
      name="attunementDetails"
      placeholder="Sczegóły procesu zestrojenia"
    />
    <Pressable onPress={onSubmit}>
      <Text fontWeight="bold">Save Item</Text>
    </Pressable>
  </SafeAreaView>
);

export default AddItemCardForm;
