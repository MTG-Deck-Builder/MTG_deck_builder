import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../@types/typescriptInterfaces";
import {
  FETCH_ALL_DECKS_OF_USER_START,
  FETCH_ALL_DECKS_OF_USER_SUCCESS,
  FETCH_ALL_DECKS_OF_USER_FAILURE,
  SET_DECKLIST_ID,
} from "../../actionTypes/index";
import "./dashboard.scss";
import { RouteComponentProps } from "react-router";

const Dashboard: React.FC<RouteComponentProps> = ({ history }) => {
  const userId = useSelector((state: State) => state.userId);
  const allDecks = useSelector((state: State) => state.allDecks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_ALL_DECKS_OF_USER_START });
    axios
      .get(`http://localhost:5000/user/${userId}/decks`)
      .then((res) => {
        dispatch({ type: FETCH_ALL_DECKS_OF_USER_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_ALL_DECKS_OF_USER_FAILURE, payload: err });
        console.log(err);
      });
  }, [dispatch, userId]);

  const setCurrentDeckId = (id: number) => {
    dispatch({ type: SET_DECKLIST_ID, payload: id });
    history.push("/deckbuilder");
  };

  return (
    <div className="dashboard-page">
      <div className="deck-container">
        <div className="deck add-deck">+</div>
        {allDecks.map(({ id, deck_name: deckName }) => (
          <div className="deck" onClick={() => setCurrentDeckId(id)}>
            {deckName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
