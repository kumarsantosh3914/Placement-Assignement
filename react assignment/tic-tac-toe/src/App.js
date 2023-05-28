import logo from './logo.svg';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-500">
      <div className="p-8 sm:p-4 lg:p-6 bg-white">
        {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Tic-Tac-Toe Game</h1> */}
        <Game />
      </div>
    </div>

  );
}

export default App;
