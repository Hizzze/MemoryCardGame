import { GameHeader } from './components/GameHeader';
import { Card } from './components/Card';
import './index.css';
import { WinMessage } from './components/WinMessagae';
import { useGameLogic } from './hooks/UseGameLogic';

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
  const { cards, score, moves, initializeGame, isGameComplete, handleCardClick } =
    useGameLogic(cardValues);
  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />
      {isGameComplete && <WinMessage moves={moves} />}
      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
