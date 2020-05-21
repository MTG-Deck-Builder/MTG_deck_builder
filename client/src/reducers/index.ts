import * as actions from "../actionTypes/index";

import { State, Action } from "../@types/typescriptInterfaces";

const initialState: State = {
  username: "",
  userId: null,
  loading: false,
  loadingList: false,
  error: false,
  allDecks: [],
  currentDeck: [],
  currentDeckId: null,
  currentCardPool: [],
};

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case actions.DECREMENT_CARD_START:
      return {
        ...state,
        loadingList: true,
      };
    case actions.DECREMENT_CARD_SUCCESS:
      const updatedDeck = [...state.currentDeck];
      updatedDeck[action.payload.indexOfCard] = action.payload.updatedCard;
      return {
        ...state,
        loadingList: false,
        currentDeck: updatedDeck,
      };
    case actions.DECREMENT_CARD_FAILURE:
      return {
        ...state,
        loadingList: false,
        error: action.payload,
      };
    case actions.REMOVE_CARD_START:
      return {
        ...state,
        loadingList: true,
      };
    case actions.REMOVE_CARD_SUCCESS:
      return {
        ...state,
        loadingList: false,
        currentDeck: state.currentDeck.filter(
          (card) => card.name !== action.payload.name
        ),
      };
    case actions.REMOVE_CARD_FAILURE:
      return {
        ...state,
        loadingList: false,
        error: action.payload,
      };
    case actions.ADD_NEW_CARD_START:
      return {
        ...state,
        loadingList: true,
      };
    case actions.ADD_NEW_CARD_SUCCESS:
      return {
        ...state,
        loadingList: false,
        currentDeck: [...state.currentDeck, action.payload],
      };
    case actions.ADD_NEW_CARD_FAILURE:
      return {
        ...state,
        loadingList: false,
        error: action.payload,
      };
    case actions.INCREMENT_CARD_START:
      return {
        ...state,
        loadingList: true,
      };
    case actions.INCREMENT_CARD_SUCCESS:
      console.log("This is the action.payload: ", action.payload);
      const changedDeck = [...state.currentDeck];
      changedDeck[action.payload.indexOfCard] = action.payload.updatedCard;
      return {
        ...state,
        loadingList: false,
        currentDeck: changedDeck,
      };
    case actions.INCREMENT_CARD_FAILURE:
      return {
        ...state,
        loadingList: false,
        error: action.payload,
      };
    case actions.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        username: action.payload.username,
        userId: action.payload.user_id,
        error: false,
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case actions.FETCH_ALL_DECKS_OF_USER_START:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_ALL_DECKS_OF_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        allDecks: action.payload,
      };
    case actions.FETCH_ALL_DECKS_OF_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case actions.FETCH_CURRENT_DECK_START:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_CURRENT_DECK_SUCCESS:
      return {
        ...state,
        loading: false,
        currentDeck: action.payload,
      };
    case actions.FETCH_CURRENT_DECK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case actions.SET_DECKLIST_ID:
      return {
        ...state,
        currentDeckId: action.payload,
      };
    case actions.FETCH_NEXT_CARD_POOL_START:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_NEXT_CARD_POOL_SUCCESS:
      return {
        ...state,
        loading: false,
        currentCardPool: action.payload,
      };
    case actions.FETCH_NEXT_CARD_POOL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return { ...state };
  }
}
