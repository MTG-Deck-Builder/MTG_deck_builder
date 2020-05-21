import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ADD_NEW_DECK_START, ADD_NEW_DECK_SUCCESS, ADD_NEW_DECK_FAILURE } from "../actionTypes";

export const useDashboardUtils = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const addDeckAndReroute = (name: string, userId : number|null) => {
        dispatch({type: ADD_NEW_DECK_START});
        axios.post(`http://localhost:5000/user/${userId}/decks`, { deck_name: name, user_id: userId})
            .then((res) => {
                console.log(res.data);
                dispatch({type: ADD_NEW_DECK_SUCCESS, payload: res.data});
                history.push('/deckbuilder');
            }).catch((err) => {
                dispatch({type: ADD_NEW_DECK_FAILURE, payload: err});
            })
    }

    return {addDeckAndReroute};
}