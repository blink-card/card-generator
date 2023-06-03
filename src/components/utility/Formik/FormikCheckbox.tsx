import { useField } from 'formik';
import Text from '../Text';
import Checkbox from 'expo-checkbox';
import { StyleSheet, View } from 'react-native';
import DefaultTheme from '../../../themes/default';
import FormikTextInput from './FormikTextInput';

interface FormikCheckboxGroupProps {
  name: string;
  placeholder: string;
  hasChildInput?: boolean;
  childInputName?: string;
  childInputLabel?: string;
  childInputPlaceholder?: string;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
  },
  checkbox: {
    borderColor: DefaultTheme.colors.inputBorder,
    marginRight: 8,
    height: 24,
    width: 24,
  },
  label: {
    paddingTop: 4,
  },
  errorText: {
    marginLeft: 12,
  },
});

const FormikCheckbox = ({
  name,
  hasChildInput = false,
  ...props
}: FormikCheckboxGroupProps): JSX.Element => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  return (
    <>
      <View style={styles.container}>
        <Checkbox
          disabled={false}
          value={field.value}
          onValueChange={(value: boolean): void => helpers.setValue(value)}
          style={styles.checkbox}
        />
        <Text style={styles.label}>{props.placeholder}</Text>
      </View>
      {hasChildInput && field.value && (
        <FormikTextInput
          name={props.childInputName}
          label={props.childInputLabel}
          placeholder={props.childInputPlaceholder}
        />
      )}
      {showError && (
        <Text color="error" style={styles.errorText}>
          {meta.error}
        </Text>
      )}
    </>
  );
};

export default FormikCheckbox;
