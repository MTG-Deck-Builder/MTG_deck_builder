import React, { useEffect, useState } from "react";
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
import Modal from "react-modal";
import { useDashboardUtils } from "../../util/useDashboardUtils";

Modal.setAppElement('#root');

const customStyles = {
  content : {
    height: '30%',
    width: '30%',
    margin: 'auto'
  }
};

const Dashboard: React.FC<RouteComponentProps> = ({ history }) => {
  const userId = useSelector((state: State) => state.userId);
  const allDecks = useSelector((state: State) => state.allDecks);
  const { addDeckAndReroute } = useDashboardUtils();
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deckName, setDeckName] = useState('');

  function openModal() {
    setIsOpen(true);
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  function handleDeckName(e: any) {
    setDeckName(e.target.value);
  }

  function submitNewDeck(e: any) {
    e.preventDefault();
    addDeckAndReroute(deckName, userId);
    setDeckName('');
  }

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
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <h2>Input Deck Name:</h2>
        <form onSubmit={submitNewDeck}>
          <input value={deckName} onChange={handleDeckName} type='text'/>
        </form>
        <button onClick={closeModal}>cancel</button>
      </Modal>
      <div className="deck-container">
        <div className="deck add-deck" onClick={openModal}>+</div>
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
