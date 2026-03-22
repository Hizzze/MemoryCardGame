import { GameHeader } from './components/GameHeader';
import { Card } from './components/Card';
import './index.css';
import { useEffect, useState } from 'react';

const cardValues = [
  '🍎',
  '🍌',
  '🍇',
  '🍊',
  '🍓',
  '🥝',
  '🍑',
  '🍒',
  '🍎',
  '🍌',
  '🍇',
  '🍊',
  '🍓',
  '🥝',
  '🍑',
  '🍒',
];

function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [mathcedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  const initializeGame = () => {
    const finalCards = cardValues.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(finalCards);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (card) => {
    if (card.isFlipped || card.isMatched) {
      return;
    }

    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, isFlipped: true };
      } else {
        return c;
      }
    });

    setCards(newCards);

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    if (flippedCards.length === 1) {
      const firstCard = cards[flippedCards[0]];

      if (firstCard.value === card.value) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
          setScore((prev) => prev + 1);

          setCards((prevCards) =>
            prevCards.map((c) => {
              if (c.id === card.id || c.id === firstCard.id) {
                return { ...c, isMatched: true, isFlipped: true };
              }
              return c;
            }),
          );

          setFlippedCards([]);
        }, 500);
      } else {
        setTimeout(() => {
          const flipBackCard = newCards.map((c) => {
            if (newFlippedCards.includes(c.id)) {
              return { ...c, isFlipped: false };
            } else {
              return c;
            }
          });
          setCards(flipBackCard);

          setFlippedCards([]);
        }, 1000);
      }
      setMoves((prev) => prev + 1);
    }
  };

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} />

      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
