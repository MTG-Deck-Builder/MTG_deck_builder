import React from "react";

interface Props {
  name: string;
  count: number;
  id: number;
  adjust: any;
}

const CardName: React.FC<Props> = ({ name, count, id, adjust }) => {
  return (
    <div className="card-name" onClick={() => adjust("-", name, id, count)}>
      <div className="count">{count}x</div>
      <div className="name">{name}</div>
    </div>
  );
};

export default CardName;
