import React from "react";
import { useDispatch } from "react-redux";
import { INCREMENT_COUNT } from "../../reducers";

interface Props {
  name: string;
  image: string;
}

const CardImage: React.FC<Props> = ({ name, image }) => {
  const dispatch = useDispatch();
  const increment: any = () => {
    dispatch({ type: INCREMENT_COUNT, payload: { name, image } });
  };

  return <img src={image} alt={name} onClick={increment} />;
};

export default CardImage;
