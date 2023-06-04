import { TileDetails } from './interfaces/tileDetails.interface';

export const spellTiles: Array<TileDetails> = [
  {
    title: 'Dodaj zaklęcie',
    description: 'addSpell',
    path: '/add-spell',
  },
  {
    title: 'Filtruj po klasie',
    description: 'filterSpellsByClass',
    path: '/spell-list/class',
  },
  {
    title: 'Filtruj po szkole',
    description: 'filterSpellsBySchool',
    path: '/spell-list/school',
  },
  {
    title: 'Wszystkie',
    description: 'listAllSpells',
    path: '/spell-list/all',
  },
];
