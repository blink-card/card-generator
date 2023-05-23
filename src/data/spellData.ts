import { DndSchool } from './dnd-school.enum';
import { DndClass } from './dnd-class.enum';

export interface tileData {
  title: string;
  description: string;
}

interface spellCard {
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

export const spellTiles: Array<tileData> = [
  {
    title: 'Add',
    description: 'addSpell',
  },
  {
    title: 'Class',
    description: 'filterSpellsByClass',
  },
  {
    title: 'School',
    description: 'filterSpellsBySchool',
  },
  {
    title: 'All',
    description: 'listAllSpells',
  },
];
