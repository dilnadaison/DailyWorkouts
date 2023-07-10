import React from 'react';
import PropTypes from 'prop-types';

function Message(props) {
  return (
    <div>
          <h1
          style={{
            color: "white",
            backgroundColor: "grey",
            textAlign: "center",
          }}
        >
          <b>Type Checking with Proptypes</b>
        </h1>
      <h1>Hello, {props.name}!</h1>
      <p>Your experience is {props.experience} years.</p>
    </div>
  );
}

Message.propTypes = {
  name: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
};

export default Message;