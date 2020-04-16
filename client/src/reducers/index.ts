export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const DECKS_START = "DECKS_START";
export const DECKS_SUCCESS = "DECKS_SUCCESS";
export const DECKS_FAILURE = "DECKS_FAILURE";
export const DECKLIST_START = "DECKLIST_START";
export const DECKLIST_SUCCESS = "DECKLIST_SUCCESS";
export const DECKLIST_FAILURE = "DECKLIST_FAILURE";
export const SET_DECKLIST_ID = "SET_DECKLIST_ID";
export const PAGE_START = "PAGE_START";
export const PAGE_SUCCESS = "PAGE_SUCCESS";
export const PAGE_FAILURE = "PAGE_FAILURE";
export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const DECREMENT_COUNT = "DECREMENT_COUNT";

export interface State {
  username: string;
  user_id: number | null;
  loading: boolean;
  error: boolean | string;
  all_decks: Decks[];
  current_deck: List[];
  current_deck_id: number | null;
  current_card_pool: Card_Pool[];
}

export interface Card_Pool {
  id: number;
  image: string;
  name: string;
}

export interface List {
  count: number;
  image: string;
  name: string;
}

interface Decks {
  deck_name: string;
  id: number;
  user_id: number;
}

export interface Action {
  type: string;
  payload: any;
}

const initialState: State = {
  username: "",
  user_id: null,
  loading: false,
  error: false,
  all_decks: [],
  current_deck: [],
  current_deck_id: null,
  current_card_pool: [],
};

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        username: action.payload.username,
        user_id: action.payload.user_id,
        error: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case DECKS_START:
      return {
        ...state,
        loading: true,
      };
    case DECKS_SUCCESS:
      return {
        ...state,
        loading: false,
        all_decks: action.payload,
      };
    case DECKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case DECKLIST_START:
      return {
        ...state,
        loading: true,
      };
    case DECKLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        current_deck: action.payload,
      };
    case DECKLIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case SET_DECKLIST_ID:
      return {
        ...state,
        current_deck_id: action.payload,
      };
    case PAGE_START:
      return {
        ...state,
        loading: true,
      };
    case PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        current_card_pool: action.payload,
      };
    case PAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case INCREMENT_COUNT:
      const index = state.current_deck.findIndex(
        (card) => card.name === action.payload.name
      );
      let updated_deck;
      if (index !== -1) {
        const current_card = state.current_deck[index];
        const updated_card = { ...current_card, count: current_card.count + 1 };
        updated_deck = [...state.current_deck];
        updated_deck.splice(index, 1, updated_card);
      } else {
        updated_deck = [...state.current_deck];
        updated_deck.push({
          name: action.payload.name,
          count: 1,
          image: action.payload.image,
        });
      }
      return {
        ...state,
        current_deck: updated_deck,
      };
    case DECREMENT_COUNT:
      const index2 = state.current_deck.findIndex(
        (card) => card.name === action.payload.name
      );
      let updated_deck2 = [...state.current_deck];
      if (updated_deck2[index2].count >= 1) {
        updated_deck2[index2] = {
          ...updated_deck2[index2],
          count: updated_deck2[index2].count - 1,
        };
      }
      return {
        ...state,
        current_deck: updated_deck2,
      };
    default:
      return { ...state };
  }
}
