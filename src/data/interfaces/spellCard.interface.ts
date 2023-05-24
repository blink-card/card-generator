import { DndSchool } from '../enums/dndSchool.enum';
import { DndClass } from '../enums/dndClass.enum';

export interface SpellCard {
  title: string;
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
  description: string;
  source?: string;
  classes: Array<DndClass>;
}
