import { GameHeader } from './components/GameHeader';

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
  return ( 
    <div className="app">
      <GameHeader score={3} moves={10} />

      <div className='cards-grid'>
        {cardValues.map((card) => {
          
        })}
      </div>
    </div>
  );
}

export default App;
