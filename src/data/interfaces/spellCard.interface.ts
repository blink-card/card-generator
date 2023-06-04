import { DndSchool } from '../enums/dndSchool.enum';
import { DndClass } from '../enums/dndClass.enum';
import { _Card } from './_card.interface';

export interface SpellCard extends _Card {
  school: DndSchool;
  spellLevel: string;
  isRitual: boolean;
  castingTime: string;
  range: string;
  materialComponent: boolean;
  semanticComponent: boolean;
  verbalComponent: boolean;
  materialComponentDetails?: string;
  duration: string;
  concentration: boolean;
  classes: Array<DndClass>;
}
