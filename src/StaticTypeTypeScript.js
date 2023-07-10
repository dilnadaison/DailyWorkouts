import React from 'react';
var Person = function (_a) {
    var name = _a.name, age = _a.age;
    return (React.createElement("div", null,
        React.createElement("h1", { style: {
                color: "white",
                backgroundColor: "#56ff00",
                textAlign: "center",
            } },
            React.createElement("b", null, "Static TypeChecking using Typescript")),
        React.createElement("h1", null, name),
        React.createElement("p", null,
            age,
            " years old")));
};
export default Person;
