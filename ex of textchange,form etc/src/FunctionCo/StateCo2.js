

import React, { useState } from 'react';

function StateCo2() {
  // Syntax: const [stateVariable, setStateFunction] = useState(initialState);
  const [count, setCount] = useState(0);

  // You can use the state variable (count) in your component
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default StateCo2;
