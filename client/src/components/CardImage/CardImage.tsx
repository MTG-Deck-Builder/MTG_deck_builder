import React from "react";

interface Props {
  name: string;
  image: string;
  id: number;
  adjust: any;
}

const CardImage: React.FC<Props> = ({ name, image, id, adjust }) => {
  return <img src={image} alt={name} onClick={() => adjust("+", name, id)} />;
};

export default CardImage;
