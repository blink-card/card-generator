import { UnknownContent } from '../../../data/interfaces/unknownContent.interface';
import { SetStateAction, useState } from 'react';
import { useField } from 'formik';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import DefaultTheme from '../../../themes/default';
import { StyleSheet } from 'react-native';
import Text from '../Text';

interface FormikMultipleSelectListProps extends UnknownContent {
  name: string;
  title: string;
  label?: string;
  placeholder: string;
}

const styles = StyleSheet.create({
  box: {
    paddingVertical: 12,
    paddingLeft: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: DefaultTheme.colors.inputBorder,
    borderRadius: 4,
  },
  dropdown: {
    margin: 8,
    borderWidth: 1,
    borderColor: DefaultTheme.colors.inputBorder,
  },
  text: {
    fontFamily: DefaultTheme.fonts.main,
  },
  label: {
    display: 'none',
  },
});

const FormikMultipleSelectList = ({
  name,
  content,
  ...props
}: FormikMultipleSelectListProps): JSX.Element => {
  const [selected, setSelected] = useState<Array<UnknownContent>>([]);
  const [_field, _meta, helpers] = useField(name);

  const data: {}[] = [];
  Object.entries(content).forEach(entry => {
    data.push({
      key: entry[0],
      value: entry[1],
    });
  });

  return (
    <>
      <Text fontWeight="bold">{props.title}</Text>
      <MultipleSelectList
        setSelected={(val: SetStateAction<UnknownContent[]>): void =>
          setSelected(val)
        }
        data={data}
        save="value"
        labelStyles={!props.label && styles.label}
        label={props.label || null}
        placeholder={props.placeholder}
        search={false}
        fontFamily={styles.text.fontFamily}
        onSelect={(): void => helpers.setValue(selected)}
        boxStyles={styles.box}
        dropdownStyles={styles.dropdown}
        dropdownShown={false}
      />
    </>
  );
};

export default FormikMultipleSelectList;
