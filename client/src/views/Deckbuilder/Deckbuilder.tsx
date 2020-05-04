import React, { useEffect, useState } from "react";
import { useDeckUtils } from "../../util/useDeckUtils";
import CardImage from "../../components/CardImage/CardImage";
import CardName from "../../components/CardName/CardName";
import Navigation from "../../components/Navigation/Navigation";
import "./deckbuilder.scss";

const Deckbuilder: React.FC = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchNextCardPool(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className="deckbuilder-page">
      <Navigation />
      <div className="deckbuilder-container">
        <div className="deckbuilder-images">
          <div className="card-pool-container">
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
            <div className="pagination-buttons">
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
          </div>
        </div>
        <div className="deckbuilder-names">
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

export default Deckbuilder;
