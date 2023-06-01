import { Pressable, SafeAreaView } from 'react-native';
import FormikTextInput from '../utility/FormikTextInput';
import Text from '../utility/Text';
import { FormikSubmit } from './AddCard';

const AddCardForm = ({ onSubmit }: FormikSubmit): JSX.Element => (
  <SafeAreaView>
    <FormikTextInput name="foo" placeholder="foo value" />
    <FormikTextInput name="bar" placeholder="bar value" />
    <Pressable onPress={onSubmit}>
      <Text fontWeight="bold">click meh</Text>
    </Pressable>
  </SafeAreaView>
);

export default AddCardForm;
