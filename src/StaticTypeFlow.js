//@flow
import React from 'react';

type Props = {
  name: string,
  age: number,
};

function Greeting(props: Props) {
  const { name, age } = props;
  return (
    <div>
      <h1
          style={{
            color: "white",
            backgroundColor: "brown",
            textAlign: "center",
          }}
        >
          <b>Static TypeChecking using Flow</b>
        </h1>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}

export default Greeting;
