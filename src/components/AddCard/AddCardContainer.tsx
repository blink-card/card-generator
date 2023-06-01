import { Formik } from 'formik';
import { FormikSubmit } from './AddCard';
import AddCardForm from './AddCardForm';

const AddCardContainer = ({ onSubmit }: FormikSubmit): JSX.Element => {
  const initialValues = {
    foo: '',
    bar: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }): JSX.Element => (
        <AddCardForm onSubmit={(): void => handleSubmit()} />
      )}
    </Formik>
  );
};

export default AddCardContainer;
