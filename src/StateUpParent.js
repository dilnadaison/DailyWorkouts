import React, { useState } from 'react';
import ChildComponent from './StateUpChild';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
        <h1
          style={{
            color: "white",
            backgroundColor: "darkgreen",
            textAlign: "center",
          }}
        >
          <b>Lifting State Up</b>
        </h1>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <ChildComponent count={count} onIncrement={handleIncrement} />
    </div>
  );
};

export default ParentComponent;