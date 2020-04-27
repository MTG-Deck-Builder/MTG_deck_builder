import React, { useEffect, useState } from "react";
import { useDeckUtils } from "../../util/deckUtils";
import CardImage from "../../components/CardImage/CardImage";
import CardName from "../../components/CardName/CardName";
import Navigation from "../../components/Navigation/Navigation";
import "./decklist.scss";

const Decklist: React.FC = () => {
  const {
    fetchNextCardPool,
    addCardToDeck,
    removeCardFromDeck,
    decrementCard,
    incrementCard,
    fetchCurrentDeck,
    checkIfCardExistsInDeck,
    currentDeck,
    currentCardPool,
  } = useDeckUtils();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchCurrentDeck();
  }, []);

  useEffect(() => {
    console.log("fetching new page...", page);
    fetchNextCardPool(page);
  }, [page]);

  const next = (e: any) => {
    e.preventDefault();
    setPage(page + 1);
  };
  const prev = (e: any) => {
    e.preventDefault();
    setPage(page - 1);
  };

  return (
    <div className="decklist-page">
      <Navigation />
      <div className="decklist-container">
        <div className="decklist-images">
          {currentCardPool.map((card) => {
            return (
              <CardImage
                card={card}
                addCardToDeck={addCardToDeck}
                incrementCard={incrementCard}
                checkIfCardExistsInDeck={checkIfCardExistsInDeck}
              />
            );
          })}
          <button
            className="prev"
            disabled={page === 1}
            onClick={(e) => prev(e)}
          >
            Prev
          </button>
          <button
            className="next"
            disabled={currentCardPool.length < 10}
            onClick={(e) => next(e)}
          >
            Next
          </button>
        </div>
        <div className="decklist-names">
          {currentDeck.map((card) => {
            return (
              <CardName
                card={card}
                removeCardFromDeck={removeCardFromDeck}
                decrementCard={decrementCard}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Decklist;
