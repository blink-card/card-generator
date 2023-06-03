import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import FormikTextInput from '../../utility/Formik/FormikTextInput';
import Text from '../../utility/Text';
import { FormikSubmit } from '../AddCard';
import FormikCheckbox from '../../utility/Formik/FormikCheckbox';
import { DndSchool } from '../../../data/enums/dndSchool.enum';
import FormikDialog from '../../utility/Formik/FormikDialog';
import { DndClass } from '../../../data/enums/dndClass.enum';
import FormikMultipleSelectList from '../../utility/Formik/FormikMultipleSelectList';
import DefaultTheme from '../../../themes/default';

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  submitButton: {
    marginVertical: 16,
    padding: 12,
    borderRadius: 16,
    alignSelf: 'center',
    alignItems: 'center',
    width: '35%',
    backgroundColor: DefaultTheme.colors.grayButton,
  },
});

const AddSpellCardForm = ({ onSubmit }: FormikSubmit): JSX.Element => (
  <SafeAreaView>
    <FormikTextInput
      name="title"
      label="Nazwa zaklęcia"
      placeholder="Krok przez mgłę"
    />
    <FormikTextInput
      name="description"
      label="Opis zaklęcia"
      placeholder="Szczegółowe efekty zaklęcia..."
      multiline={true}
    />
    <FormikTextInput
      name="source"
      label="Z jakiej książki pochodzi zaklęcie?"
      placeholder="Podręcznik Gracza, N/A"
    />
    <FormikDialog
      name="school"
      content={DndSchool}
      dialogTitle="Szkoła zaklęcia"
      label="Szkoła Magii"
      placeholder="Wybierz jedną ze szkół..."
    />
    <FormikDialog
      name="spellLevel"
      content={[
        'Sztuczka',
        ...Array.from({ length: 9 }, (_, index) => `${index + 1} krąg`),
      ]}
      dialogTitle="Szkoła zaklęcia"
      label="Poziom zaklęcia"
      placeholder="Sztuczka"
    />

    <FormikTextInput
      name="castingTime"
      label="Czas rzucania zaklęcia"
      placeholder="1 akcja"
    />
    <FormikTextInput
      name="range"
      label="Zasięg zaklęcia"
      placeholder="27 metrów"
    />
    <View>
      <Text fontWeight="bold">Komponenty</Text>
      <View style={styles.checkboxContainer}>
        <FormikCheckbox name="semanticComponent" placeholder="Somatyczne" />
        <FormikCheckbox name="verbalComponent" placeholder="Werbalne" />
        <FormikCheckbox
          name="materialComponent"
          placeholder="Materialne"
          hasChildInput={true}
          childInputName="materialComponentDetails"
          childInputLabel="Opis i wartość komponentów materialnych"
          childInputPlaceholder="Garść dębowej kory"
        />
      </View>
    </View>
    <FormikTextInput
      name="duration"
      label="Czas trwania zaklęcia"
      placeholder="Natychmiastowy"
    />
    <FormikMultipleSelectList
      name="classes"
      content={DndClass}
      title="Klasy"
      placeholder="Wybierz klasy"
    />
    <View style={styles.checkboxContainer}>
      <FormikCheckbox name="isRitual" placeholder="Rytuał" />
      <FormikCheckbox name="concentration" placeholder="Koncentracja" />
    </View>

    <Pressable onPress={onSubmit} style={styles.submitButton}>
      <Text fontWeight="bold" color="textWhite">
        Zapisz
      </Text>
    </Pressable>
  </SafeAreaView>
);

export default AddSpellCardForm;
