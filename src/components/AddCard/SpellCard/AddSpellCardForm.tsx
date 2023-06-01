import { Pressable, SafeAreaView } from 'react-native';
import FormikTextInput from '../../utility/FormikTextInput';
import Text from '../../utility/Text';
import { FormikSubmit } from '../AddCard';

const AddSpellCardForm = ({ onSubmit }: FormikSubmit): JSX.Element => (
  <SafeAreaView>
    <FormikTextInput name="castingTime" placeholder="Casting time" />
    <FormikTextInput name="classes" placeholder="This should be a list" />
    <FormikTextInput
      name="components"
      placeholder="This should be checkboxes + string field for material"
    />
    <FormikTextInput
      name="concentration"
      placeholder="This should be a checkbox"
    />
    <FormikTextInput name="description" placeholder="Spell effects" />
    <FormikTextInput name="Duration" placeholder="Spell duration" />
    <FormikTextInput name="isRitual" placeholder="This should be a checkbox" />
    <FormikTextInput name="range" placeholder="Spell range" />
    <FormikTextInput
      name="school"
      placeholder="Which school the spell belongs to"
    />
    <FormikTextInput
      name="source"
      placeholder="Which source book the spell comes form"
    />
    <FormikTextInput name="spellLevel" placeholder="Level of the spell" />
    <FormikTextInput name="title" placeholder="Spell name" />
    <Pressable onPress={onSubmit}>
      <Text fontWeight="bold">Save Spell</Text>
    </Pressable>
  </SafeAreaView>
);

export default AddSpellCardForm;
