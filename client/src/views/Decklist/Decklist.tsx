import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../reducers/index";
import Card from "../../components/Card/Card";
import {
  DECKLIST_START,
  DECKLIST_SUCCESS,
  DECKLIST_FAILURE,
  PAGE_START,
  PAGE_SUCCESS,
  PAGE_FAILURE,
  Card_Pool,
  List,
} from "../../reducers/index";
import "./decklist.scss";
import Navigation from "../../components/Navigation/Navigation";

const Decklist: React.FC = () => {
  const { current_deck_id, current_deck, current_card_pool } = useSelector(
    (state: State) => state
  );
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: DECKLIST_START });
    axios
      .get(`http://localhost:5000/decks/${current_deck_id}`)
      .then((res) => {
        dispatch({ type: DECKLIST_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: DECKLIST_FAILURE, payload: err });
      });
  }, []);

  useEffect(() => {
    dispatch({ type: PAGE_START });
    axios
      .post(`http://localhost:5000/cards`, { page: page })
      .then((res) => {
        dispatch({ type: PAGE_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: PAGE_FAILURE, payload: err });
      });
  }, [page]);

  const next = (e: any) => {
    e.preventDefault();
    setPage(page + 1);
  };
  const prev = (e: any) => {
    e.preventDefault();
    setPage(page - 1);
  };

  return (
    <div className="decklist-page">
      <Navigation />
      <div className="decklist-container">
        <div className="decklist-images">
          {current_card_pool.map((card: Card_Pool) => {
            return <Card image={card.image} name={card.name} />;
          })}
          <button
            className="prev"
            disabled={page === 1}
            onClick={(e) => prev(e)}
          >
            Prev
          </button>
          <button
            className="next"
            disabled={current_card_pool.length < 10}
            onClick={(e) => next(e)}
          >
            Next
          </button>
        </div>
        <div className="decklist-names">
          {current_deck.map((card: List) => {
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
