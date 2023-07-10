import React from 'react';

type Props = {
  name: string;
  age: number;
};

const Person: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
       <h1
          style={{
            color: "white",
            backgroundColor: "#56ff00",
            textAlign: "center",
          }}
        >
          <b>Static TypeChecking using Typescript</b>
        </h1>
      <h1>{name}</h1>
      <p>{age} years old</p>
    </div>
  );
};

export default Person;


