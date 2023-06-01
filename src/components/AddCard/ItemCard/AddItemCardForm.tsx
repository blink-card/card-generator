import { Pressable, SafeAreaView } from 'react-native';
import FormikTextInput from '../../utility/FormikTextInput';
import Text from '../../utility/Text';
import { FormikSubmit } from '../AddCard';

const AddItemCardForm = ({ onSubmit }: FormikSubmit): JSX.Element => (
  <SafeAreaView>
    <FormikTextInput
      name="attunementDetails"
      placeholder="Attunement process"
    />
    <FormikTextInput name="description" placeholder="Item description" />
    <FormikTextInput
      name="isWondrous"
      placeholder="This should be a checkbox"
    />
    <FormikTextInput name="rarity" placeholder="Item rarity, list" />
    <FormikTextInput name="requiresAttunement" placeholder="Checkbox" />
    <FormikTextInput
      name="source"
      placeholder="Which source book the item comes form"
    />
    <FormikTextInput name="title" placeholder="Item name" />
    <FormikTextInput name="type" placeholder="Item type" />
    <Pressable onPress={onSubmit}>
      <Text fontWeight="bold">Save Item</Text>
    </Pressable>
  </SafeAreaView>
);

export default AddItemCardForm;
