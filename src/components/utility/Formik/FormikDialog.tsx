import { useField } from 'formik';
import { Alert, AlertButton, Pressable, StyleSheet } from 'react-native';
import DefaultTheme from '../../../themes/default';
import Text from '../Text';

interface FormikDialogProps {
  name: string;
  content: Object | Array<string | number> | unknown;
  dialogTitle: string;
  label: string;
  placeholder: string;
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingLeft: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: DefaultTheme.colors.inputBorder,
    borderRadius: 4,
  },
  errorBorder: {
    borderColor: DefaultTheme.colors.error,
  },
  errorText: {
    paddingBottom: 12,
    marginLeft: 12,
  },
  placeholderText: {
    color: DefaultTheme.colors.placeholder,
  },
});

const FormikDialog = ({ name, ...props }: FormikDialogProps): JSX.Element => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const generateButtons = (content: unknown): AlertButton[] => {
    let buttons: AlertButton[] = [];

    if (
      Array.isArray(content) ||
      typeof content === 'object' ||
      content instanceof Object
    ) {
      Object.values(content).forEach(entry =>
        buttons.push({
          text: `${entry}`,
          onPress: () => helpers.setValue(entry),
        }),
      );
    } else
      return [
        {
          text: 'Coś poszło nie tak',
          onPress: () =>
            console.error(
              `${Date.now()}: AddSpellCard/${name}/generateButtons(): ${content}`,
            ),
        },
      ];

    return buttons;
  };

  const openDialog = (): void => {
    Alert.alert(props.dialogTitle, null, generateButtons(props.content));
  };

  return (
    <>
      <Text fontWeight="bold">{props.label}</Text>
      <Pressable
        onPress={openDialog}
        style={[styles.button, showError && styles.errorBorder]}
      >
        <Text style={!field.value && styles.placeholderText}>
          {field.value ?? props.placeholder}
        </Text>
      </Pressable>
      {showError && (
        <Text color="error" style={styles.errorText}>
          {meta.error}
        </Text>
      )}
    </>
  );
};

export default FormikDialog;
