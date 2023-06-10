import { SafeAreaView, StyleSheet } from 'react-native';
import Text, { B, I } from '../utility/Text';
import { SpellCard } from '../../data/interfaces/spellCard.interface';

interface SpellCardDetailsProps {
  card: SpellCard;
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    padding: 4,
  },
  textSeparator: {
    marginVertical: 4,
  },
  descriptionText: {
    textAlign: 'justify',
  },
});

const SpellCardDetails = ({ card }: SpellCardDetailsProps): JSX.Element => {
  const hasComponents: boolean =
    card.verbalComponent || card.semanticComponent || card.materialComponent;

  const renderSpellComponents = (): JSX.Element => (
    <>
      <Text>
        <B>Komponenty: </B>
        {card.verbalComponent && <B>W </B>}
        {card.semanticComponent && <B>S </B>}
        {card.materialComponent && <B>M </B>}
        {card.materialComponentDetails && (
          <I>{`(${card.materialComponentDetails})`}</I>
        )}
      </Text>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      {card.source && <Text fontStyle="italic">Źródło: {card.source}</Text>}
      <Text style={styles.textSeparator} fontStyle="italic">
        {card.school} - {card.spellLevel} {card.isRitual && '(rytuał)'}
      </Text>
      <Text>
        <B>Czas rzucania: </B>
        {card.castingTime}
      </Text>
      <Text>
        <B>Zasięg: </B>
        {card.range}
      </Text>
      <Text>{hasComponents && renderSpellComponents()}</Text>
      <Text>
        <B>Czas trwania: </B>
        {card.concentration && 'Koncentracja, '}
        {card.duration}
      </Text>
      <Text style={{ ...styles.textSeparator, ...styles.descriptionText }}>
        {card.description}
      </Text>
      <Text>
        <Text fontWeight="bold">Klasy: </Text>
        {card.classes.join(', ')}
      </Text>
    </SafeAreaView>
  );
};

export default SpellCardDetails;
