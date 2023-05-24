import { DndSchool } from '../enums/dndSchool.enum';
import { DndClass } from '../enums/dndClass.enum';
import { _Card } from './_card.interface';

export interface SpellCard extends _Card {
  school: DndSchool;
  spellLevel: 'sztuczka' | number;
  isRitual: boolean;
  castingTime: string;
  range: string;
  components: {
    verbal: boolean;
    semantic: boolean;
    material: boolean | string;
  };
  duration: string;
  concentration: boolean;
  classes: Array<DndClass>;
}
