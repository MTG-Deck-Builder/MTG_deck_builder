import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../reducers/index";
import {
  DECKS_START,
  DECKS_SUCCESS,
  DECKS_FAILURE,
  SET_DECKLIST_ID,
} from "../../reducers/index";
import "./dashboard.scss";
import { withRouter } from "react-router";

interface Props {
  history: any;
}

const Dashboard: React.FC<Props> = ({ history }) => {
  let { user_id, all_decks } = useSelector((state: State) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: DECKS_START });
    if (user_id === null) {
      user_id = Number(localStorage.getItem("user_id"));
    }
    axios
      .get(`http://localhost:5000/user/${user_id}/decks`)
      .then((res) => {
        dispatch({ type: DECKS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: DECKS_FAILURE, payload: err });
        console.log(err);
      });
  }, []);

  const set_current_deck_id = (id: number) => {
    dispatch({ type: SET_DECKLIST_ID, payload: id });
    localStorage.setItem("current_deck_id", id.toString());
    history.push("/decklist");
  };

  return (
    <div className="dashboard-container">
      <div className="deck-container">
        {all_decks.map((deck) => (
          <div className="deck" onClick={() => set_current_deck_id(deck.id)}>
            {deck.deck_name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
