import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_ALL_DECKS_OF_USER_START,
  FETCH_ALL_DECKS_OF_USER_SUCCESS,
  FETCH_ALL_DECKS_OF_USER_FAILURE,
  FETCH_CURRENT_DECK_START,
  FETCH_CURRENT_DECK_SUCCESS,
  FETCH_CURRENT_DECK_FAILURE,
  FETCH_NEXT_CARD_POOL_START,
  FETCH_NEXT_CARD_POOL_SUCCESS,
  FETCH_NEXT_CARD_POOL_FAILURE,
  DECREMENT_CARD_START,
  DECREMENT_CARD_SUCCESS,
  DECREMENT_CARD_FAILURE,
  REMOVE_CARD_START,
  REMOVE_CARD_SUCCESS,
  REMOVE_CARD_FAILURE,
  ADD_NEW_CARD_START,
  ADD_NEW_CARD_SUCCESS,
  ADD_NEW_CARD_FAILURE,
  INCREMENT_CARD_START,
  INCREMENT_CARD_SUCCESS,
  INCREMENT_CARD_FAILURE,
  SET_DECKLIST_ID,
} from "../actionTypes/index";

import { State, Action } from "../typescriptInterfaces/typescriptInterfaces";

const initialState: State = {
  username: "",
  userId: null,
  loading: false,
  error: false,
  allDecks: [],
  currentDeck: [],
  currentDeckId: null,
  currentCardPool: [],
};

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case DECREMENT_CARD_START:
      return {
        ...state,
        loading: true,
      };
    case DECREMENT_CARD_SUCCESS:
      const updatedDeck = [...state.currentDeck];
      updatedDeck[action.payload.indexOfCard] = action.payload.updatedCard;
      return {
        ...state,
        loading: false,
        currentDeck: updatedDeck,
      };
    case DECREMENT_CARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case REMOVE_CARD_START:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        currentDeck: state.currentDeck.filter(
          (card) => card.name !== action.payload.name
        ),
      };
    case REMOVE_CARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_NEW_CARD_START:
      return {
        ...state,
        loading: true,
      };
    case ADD_NEW_CARD_SUCCESS:
      return {
        ...state,
        loading: true,
        currentDeck: [...state.currentDeck, action.payload],
      };
    case ADD_NEW_CARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case INCREMENT_CARD_START:
      return {
        ...state,
        loading: true,
      };
    case INCREMENT_CARD_SUCCESS:
      console.log("This is the action.payload: ", action.payload);
      const changedDeck = [...state.currentDeck];
      changedDeck[action.payload.indexOfCard] = action.payload.updatedCard;
      return {
        ...state,
        loading: false,
        currentDeck: changedDeck,
      };
    case INCREMENT_CARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
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
        userId: action.payload.user_id,
        error: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case FETCH_ALL_DECKS_OF_USER_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_DECKS_OF_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        allDecks: action.payload,
      };
    case FETCH_ALL_DECKS_OF_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case FETCH_CURRENT_DECK_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CURRENT_DECK_SUCCESS:
      return {
        ...state,
        loading: false,
        currentDeck: action.payload,
      };
    case FETCH_CURRENT_DECK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case SET_DECKLIST_ID:
      return {
        ...state,
        currentDeckId: action.payload,
      };
    case FETCH_NEXT_CARD_POOL_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_NEXT_CARD_POOL_SUCCESS:
      return {
        ...state,
        loading: false,
        currentCardPool: action.payload,
      };
    case FETCH_NEXT_CARD_POOL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return { ...state };
  }
}
