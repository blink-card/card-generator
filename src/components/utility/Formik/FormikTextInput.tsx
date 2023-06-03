import { useField } from 'formik';
import TextInput from '../TextInput';
import DefaultTheme from '../../../themes/default';
import Text from '../Text';
import { StyleSheet } from 'react-native';

interface FormikTextInputProps {
  name: string;
  label: string;
  multiline?: boolean;
  placeholder?: string;
}

const styles = StyleSheet.create({
  errorText: {
    paddingBottom: 12,
    marginLeft: 12,
  },
  errorBorder: {
    borderColor: DefaultTheme.colors.error,
  },
  inputField: {
    paddingVertical: 12,
    paddingLeft: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: DefaultTheme.colors.inputBorder,
    borderRadius: 4,
  },
});

const FormikTextInput = ({
  name,
  ...props
}: FormikTextInputProps): JSX.Element => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  return (
    <>
      <Text fontWeight="bold">{props.label}</Text>
      <TextInput
        onChangeText={(value: string): void => helpers.setValue(value)}
        onBlur={(): void => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={[styles.inputField, showError && styles.errorBorder]}
        placeholder={props.placeholder}
        multiline={!!props.multiline}
      />
      {showError && (
        <Text color="error" style={styles.errorText}>
          {meta.error}
        </Text>
      )}
    </>
  );
};

export default FormikTextInput;
