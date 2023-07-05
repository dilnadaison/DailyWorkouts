import React from 'react';

const ChildComponent = ({ count, onIncrement }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

export default ChildComponent;