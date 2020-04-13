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
import Navigation from "../../components/Navigation/Navigation";

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
      <Navigation />
      <div className="decklist-container">
        <div className="decklist-images">
          {current_deck.map((card: Card) => {
            return <img src={card.image} alt={card.name} />;
          })}
        </div>
        <div className="decklist-names">
          {current_deck.map((card: Card) => {
            return (
              <div className="card-name">
                <div className="count">{card.count}x</div>
                <div className="name">{card.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Decklist;
