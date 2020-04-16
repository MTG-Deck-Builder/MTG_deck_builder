import React from "react";
import { useDispatch } from "react-redux";
import { INCREMENT_COUNT } from "../../reducers";

interface Props {
  name: string;
  image: string;
}

const Card: React.FC<Props> = ({ name, image }) => {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: INCREMENT_COUNT, payload: { name, image } });
  };

  return <img src={image} alt={name} onClick={increment} />;
};

export default Card;
