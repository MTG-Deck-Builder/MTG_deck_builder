import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  State,
  CardInPool,
  CardInDeck,
} from "../typescriptInterfaces/typescriptInterfaces";
import {
  INCREMENT_CARD_START,
  INCREMENT_CARD_SUCCESS,
  INCREMENT_CARD_FAILURE,
  DECREMENT_CARD_START,
  DECREMENT_CARD_SUCCESS,
  DECREMENT_CARD_FAILURE,
  REMOVE_CARD_START,
  REMOVE_CARD_SUCCESS,
  REMOVE_CARD_FAILURE,
  ADD_NEW_CARD_START,
  ADD_NEW_CARD_SUCCESS,
  ADD_NEW_CARD_FAILURE,
  FETCH_NEXT_CARD_POOL_START,
  FETCH_NEXT_CARD_POOL_SUCCESS,
  FETCH_NEXT_CARD_POOL_FAILURE,
  FETCH_CURRENT_DECK_START,
  FETCH_CURRENT_DECK_SUCCESS,
  FETCH_CURRENT_DECK_FAILURE,
} from "../actionTypes/index";

export const useDeckUtils = () => {
  const dispatch = useDispatch();
  const currentDeck = useSelector((state: State) => state.currentDeck);
  const currentDeckId = useSelector((state: State) => state.currentDeckId);
  const currentCardPool = useSelector((state: State) => state.currentCardPool);

  const addCardToDeck = (cardToAdd: CardInPool) => {
    dispatch({ type: ADD_NEW_CARD_START });
    const newCard = {
      id: cardToAdd.id,
      name: cardToAdd.name,
      count: 1,
    };
    axios
      .post(`http://localhost:5000/decks/${currentDeckId}`, { id: newCard.id })
      .then(() => {
        dispatch({
          type: ADD_NEW_CARD_SUCCESS,
          payload: newCard,
        });
      })
      .catch((err) => {
        dispatch({ type: ADD_NEW_CARD_FAILURE, payload: err });
      });
  };

  const removeCardFromDeck = (cardToRemove: CardInDeck) => {
    dispatch({ type: REMOVE_CARD_START });
    const { id } = cardToRemove;
    axios
      .delete(`http://localhost:5000/decks/${currentDeckId}`, {
        data: { id },
      })
      .then((res) => {
        dispatch({
          type: REMOVE_CARD_SUCCESS,
          payload: cardToRemove,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: REMOVE_CARD_FAILURE, payload: err });
      });
  };

  const decrementCard = (cardToDecrement: CardInDeck) => {
    dispatch({ type: DECREMENT_CARD_START });
    const indexOfCard = currentDeck.findIndex((card) => {
      return card.name === cardToDecrement.name;
    });
    const updatedCard = {
      ...cardToDecrement,
      count: cardToDecrement.count - 1,
    };
    axios
      .put(`http://localhost:5000/decks/${currentDeckId}`, updatedCard)
      .then(() => {
        dispatch({
          type: DECREMENT_CARD_SUCCESS,
          payload: { updatedCard, indexOfCard },
        });
      })
      .catch((err) => {
        dispatch({ type: DECREMENT_CARD_FAILURE, payload: err });
      });
  };

  const incrementCard = (cardToIncrement: CardInPool) => {
    dispatch({ type: INCREMENT_CARD_START });
    const indexOfCard = currentDeck.findIndex((card) => {
      return card.name === cardToIncrement.name;
    });
    const updatedCard = {
      name: cardToIncrement.name,
      id: cardToIncrement.id,
      count: currentDeck[indexOfCard].count + 1,
    };
    axios
      .put(`http://localhost:5000/decks/${currentDeckId}`, updatedCard)
      .then(() => {
        dispatch({
          type: INCREMENT_CARD_SUCCESS,
          payload: { updatedCard, indexOfCard },
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: INCREMENT_CARD_FAILURE, payload: err });
      });
  };

  const fetchNextCardPool = (page: number) => {
    dispatch({ type: FETCH_NEXT_CARD_POOL_START });
    axios
      .post(`http://localhost:5000/cards`, { page: page })
      .then((res) => {
        dispatch({ type: FETCH_NEXT_CARD_POOL_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_NEXT_CARD_POOL_FAILURE, payload: err });
      });
  };

  const fetchCurrentDeck = () => {
    dispatch({ type: FETCH_CURRENT_DECK_START });
    axios
      .get(`http://localhost:5000/decks/${currentDeckId}`)
      .then((res) => {
        dispatch({ type: FETCH_CURRENT_DECK_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_CURRENT_DECK_FAILURE, payload: err });
      });
  };

  const checkIfCardExistsInDeck = (nameOfCard: string) => {
    const indexOfCard = currentDeck.findIndex(
      (card) => card.name === nameOfCard
    );
    if (indexOfCard !== -1) {
      return true;
    } else {
      return false;
    }
  };

  return {
    addCardToDeck,
    removeCardFromDeck,
    decrementCard,
    incrementCard,
    fetchNextCardPool,
    fetchCurrentDeck,
    checkIfCardExistsInDeck,
    currentDeck,
    currentCardPool,
  };
};
