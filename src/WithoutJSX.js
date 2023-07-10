import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component without JSX
// const MyComponent = React.createElement(
//   'div',
//   { className: 'my-component' },
//   'Hello, React without JSX!'
// );

// // Render the component directly to the document body
// ReactDOM.render(MyComponent, document.body);


 function WithoutJSX() {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hello Non-JSX!'),
    React.createElement('p', null, 'This content is rendered without JSX.')
  );
}

export default WithoutJSX
