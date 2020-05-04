import React from "react";
import { CardInDeck } from "../../@types/typescriptInterfaces";

interface Props {
  card: CardInDeck;
  removeCardFromDeck: any;
  decrementCard: any;
}

const CardName: React.FC<Props> = ({
  card,
  removeCardFromDeck,
  decrementCard,
}) => {
  const { count, name } = card;
  return (
    <div
      className="card-name"
      onClick={
        count > 1 ? () => decrementCard(card) : () => removeCardFromDeck(card)
      }
    >
      <div className="count">{count}x</div>
      <div className="name">{name}</div>
    </div>
  );
};

export default CardName;
