var createReactClass = require("create-react-class");

// App  takes a variable and renders
// the output function for showing
// results in screen
var MyComponent = createReactClass({
  render: function () {
    return (
      <>
        <h1
          style={{
            color: "white",
            backgroundColor: "violet",
            textAlign: "center",
          }}
        >
          <b>Without ES6</b>
        </h1>
        <h1>Hello Welcome to, GeeksforGeeks</h1>
      </>
    );
  },
});
export default MyComponent;
