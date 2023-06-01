import { FormikValues } from 'formik';
import { SafeAreaView } from 'react-native';
import PlaceholderElement from '../utility/PlaceholderElement';
import AddCardContainer from './AddCardContainer';

export type FormikSubmit = {
  onSubmit: (values: FormikValues) => void;
};

const AddCard = (): JSX.Element => {
  const onSubmit = (values: FormikValues): void => {
    console.log(values);
  };

  return (
    <SafeAreaView>
      <PlaceholderElement exampleText={'card form'} />
      <AddCardContainer onSubmit={onSubmit} />
    </SafeAreaView>
  );
};

export default AddCard;
