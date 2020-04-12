import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../reducers/index";
import {
  DECKLIST_START,
  DECKLIST_SUCCESS,
  DECKLIST_FAILURE,
} from "../../reducers/index";
import "./decklist.scss";

interface Card {
  count: number;
  image: string;
  name: string;
}
const Decklist: React.FC = () => {
  const { current_deck_id, current_deck } = useSelector(
    (state: State) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: DECKLIST_START });
    axios
      .get(`http://localhost:5000/decks/${current_deck_id}`)
      .then((res) => {
        dispatch({ type: DECKLIST_SUCCESS, payload: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        dispatch({ type: DECKLIST_FAILURE, payload: err });
      });
  }, []);
  return (
    <div className="decklist-page">
      <div className="decklist-container">
        {current_deck.map((card: Card) => {
          return <img src={card.image} alt={card.name} />;
        })}
      </div>
    </div>
  );
};

export default Decklist;
