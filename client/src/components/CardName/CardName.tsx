import React from "react";
import { useDispatch } from "react-redux";
import { DECREMENT_COUNT } from "../../reducers/index";

interface Props {
  name: string;
  count: number;
}

const CardName: React.FC<Props> = ({ name, count }) => {
  const dispatch = useDispatch();
  const decrement: any = () => {
    dispatch({ type: DECREMENT_COUNT, payload: { name, count } });
  };

  return (
    <div className="card-name" onClick={decrement}>
      <div className="count">{count}x</div>
      <div className="name">{name}</div>
    </div>
  );
};

export default CardName;
