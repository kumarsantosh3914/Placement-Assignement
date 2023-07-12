import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="max-w-lg">
      <h1 className="mx-32 mt-40">{count}</h1>
      <div className="mt-20">
        <button
          className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={increment}
        >
          increment
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={decrement}
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
