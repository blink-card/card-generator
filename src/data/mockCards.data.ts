import { SpellCard } from './interfaces/spellCard.interface';
import { DndClass } from './enums/dndClass.enum';
import { DndSchool } from './enums/dndSchool.enum';
import { ItemCard } from './interfaces/itemCard.interface';
import { DndRarity } from './enums/dndRarity.enum';

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const mockSpellCards: SpellCard[] = [
  {
    cardType: 'spell',
    castingTime: '1 akcja',
    classes: [DndClass.CLERIC, DndClass.WIZARD, DndClass.SORCERER],
    concentration: true,
    description: loremIpsum,
    duration: '1 godzina',
    isFavourite: true,
    isRitual: false,
    materialComponent: true,
    materialComponentDetails: 'Przedmiot A i przedmiot B o wartości XY',
    range: '9 metrów',
    school: DndSchool.ABJURATION,
    semanticComponent: true,
    source: 'Podręcznik Gracza',
    spellLevel: '4 krąg',
    title: 'Zaklęcie #1',
    verbalComponent: true,
  },
  {
    cardType: 'spell',
    castingTime: 'Reakcja, gdy X zrobi Y w zasięgu wzroku',
    classes: [DndClass.CLERIC, DndClass.DRUID],
    concentration: false,
    description: `${loremIpsum.slice(0, loremIpsum.length / 2)}`,
    duration: 'Natychmiastowy',
    isFavourite: false,
    isRitual: false,
    materialComponent: false,
    materialComponentDetails: null,
    range: '27 metrów',
    school: DndSchool.EVOCATION,
    semanticComponent: true,
    source: 'Podręcznik Gracza',
    spellLevel: '1 krąg',
    title: 'Zaklęcie #2',
    verbalComponent: false,
  },
  {
    cardType: 'spell',
    castingTime: '1 akcja',
    classes: [DndClass.WIZARD, DndClass.BARD],
    concentration: false,
    description: loremIpsum,
    duration: 'Natychmiastowy',
    isFavourite: true,
    isRitual: false,
    materialComponent: false,
    materialComponentDetails: null,
    range: '9 metrów',
    school: DndSchool.ILLUSION,
    semanticComponent: true,
    source: null,
    spellLevel: 'Sztuczka',
    title: 'Zaklęcie #3',
    verbalComponent: true,
  },
  {
    cardType: 'spell',
    castingTime: '1 akcja dodatkowa',
    classes: [DndClass.CLERIC],
    concentration: true,
    description: `${loremIpsum},${loremIpsum}`,
    duration: '10 minut',
    isFavourite: false,
    isRitual: true,
    materialComponent: true,
    materialComponentDetails: 'Przedmiot A',
    range: '36 metrów',
    school: DndSchool.CONJURATION,
    semanticComponent: true,
    source: 'Przewodnik Xanathara',
    spellLevel: '2 krąg',
    title: 'Zaklęcie #4',
    verbalComponent: false,
  },
];

const mockItemCards: ItemCard[] = [
  {
    cardType: 'spell',
    description: loremIpsum,
    isFavourite: true,
    source: 'Podręcznik Gracza',
    title: 'Przedmiot #1',
    isWondrous: false,
    type: 'Dowolny hełm',
    rarity: DndRarity.RARE,
    requiresAttunement: false,
    attunementDetails: null,
  },
  {
    cardType: 'spell',
    description: `${loremIpsum.slice(0, loremIpsum.length / 2)}`,
    isFavourite: false,
    source: 'Podręcznik Gracza',
    title: 'Przedmiot` #2',
    isWondrous: true,
    type: 'Dowolny miecz dwuręczny',
    rarity: DndRarity.UNCOMMON,
    requiresAttunement: false,
    attunementDetails: null,
  },
  {
    cardType: 'spell',
    description: loremIpsum,
    isFavourite: true,
    source: null,
    title: 'Przedmiot #3',
    isWondrous: false,
    type: 'Pierścień',
    rarity: DndRarity.LEGENDARY,
    requiresAttunement: true,
    attunementDetails: 'Wymaga zestrojenia z klerykiem.',
  },
  {
    cardType: 'spell',
    description: `${loremIpsum},${loremIpsum}`,
    isFavourite: false,
    source: 'Przewodnik Xanathara',
    title: 'Przedmiot #4',
    isWondrous: true,
    type: 'Lekki pancerz',
    rarity: DndRarity.COMMON,
    requiresAttunement: true,
    attunementDetails: null,
  },
];

export default [mockSpellCards, mockItemCards];
