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

export interface State {
  username: string;
  user_id: number | null;
  loading: boolean;
  error: boolean | string;
  all_decks: Decks[];
  current_deck: List[];
  current_deck_id: number | null;
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
    default:
      return { ...state };
  }
}
