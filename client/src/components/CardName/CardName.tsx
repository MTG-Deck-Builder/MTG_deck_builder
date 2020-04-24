import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  DECREMENT_COUNT,
  DECREMENT_COUNT_START,
  DECREMENT_COUNT_SUCCESS,
  DECREMENT_COUNT_FAILURE,
} from "../../reducers/index";

interface Props {
  name: string;
  count: number;
  id: number;
}

const CardName: React.FC<Props> = ({ name, count, id }) => {
  const dispatch = useDispatch();
  const decrement: any = () => {
    dispatch({ type: DECREMENT_COUNT_START });
    // dispatch({ type: DECREMENT_COUNT, payload: { name, count } });
    if (count > 1) {
      const updated_card = {
        name,
        id,
        count: count - 1,
      };
      axios
        .put("http://localhost:5000/decks/1", updated_card)
        .then((res) => {
          dispatch({ type: DECREMENT_COUNT_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          dispatch({ type: DECREMENT_COUNT_FAILURE, payload: err });
        });
    }
  };

  return (
    <div className="card-name" onClick={decrement}>
      <div className="count">{count}x</div>
      <div className="name">{name}</div>
    </div>
  );
};

export default CardName;
