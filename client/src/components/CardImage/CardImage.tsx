import React from "react";
import { CardInPool } from "../../typescriptInterfaces/typescriptInterfaces";

interface Props {
  card: CardInPool;
  addCardToDeck: any;
  incrementCard: any;
  checkIfCardExistsInDeck: any;
}

const CardImage: React.FC<Props> = ({
  card,
  addCardToDeck,
  incrementCard,
  checkIfCardExistsInDeck,
}) => {
  const { image, name } = card;
  return (
    <img
      src={image}
      alt={name}
      onClick={
        checkIfCardExistsInDeck(name)
          ? () => incrementCard(card)
          : () => addCardToDeck(card)
      }
    />
  );
};

export default CardImage;
