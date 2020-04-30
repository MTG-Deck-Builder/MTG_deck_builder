export interface State {
  username: string;
  userId: number | null;
  loading: boolean;
  error: boolean | string;
  allDecks: Deck[];
  currentDeck: CardInDeck[];
  currentDeckId: number | null;
  currentCardPool: CardInPool[];
}

export interface CardInPool {
  id: number;
  image: string;
  name: string;
}

export interface CardInDeck {
  count: number;
  name: string;
  id: number;
}

export interface Deck {
  deck_name: string;
  id: number;
  user_id: number;
}

export interface Action {
  type: string;
  payload: any;
}
