import React, { Component } from "react";
import HOC from "./HOCDemo";

class HOCButton extends Component {
  render() {
    return (
      <div>
        <h1
          style={{
            color: "white",
            backgroundColor: "darkorange",
            textAlign: "center",
          }}
        >
          <b>OnClick using HOC</b>
        </h1>
        <h2>counter:{this.props.count}</h2>
        <button onClick={this.props.incrementCounter}>Click Here</button>
      </div>
    );
  }
}

export default HOC(HOCButton);