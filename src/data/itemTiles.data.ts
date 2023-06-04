import { TileDetails } from './interfaces/tileDetails.interface';

export const itemTiles: Array<TileDetails> = [
  {
    title: 'Dodaj przedmiot',
    description: 'addItem',
    path: '/add-item',
  },
  {
    title: 'Filtruj po rzadkości',
    description: 'filterItemsByRarity',
    path: '/item-list/rarity',
  },
  {
    title: 'Wszystkie',
    description: 'listAllItems',
    path: '/item-list/all',
  },
];
