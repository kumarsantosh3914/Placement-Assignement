import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className='card'>
        <button onClick={() => setCount(count - 1)}>Minus</button>
        <p className='show-count'>
          Count is {count}
        </p>
        <button onClick={() => setCount(count + 1)}>Plus</button>
      </div>
    </div>
  );
}

export default App;
