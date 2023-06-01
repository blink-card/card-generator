export type implementedCards = 'spell' | 'item';

export interface _Card {
  title: string;
  cardType: implementedCards;
  description: string;
  source?: string;
  isFavourite: boolean;
}
