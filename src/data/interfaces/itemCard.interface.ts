import { DndRarity } from '../enums/dndRarity.enum';
import { _Card } from './_card.interface';

export interface ItemCard extends _Card {
  isWondrous: boolean;
  type: string;
  rarity: DndRarity;
  requiresAttunement: boolean;
  attunementDetails?: string;
}
