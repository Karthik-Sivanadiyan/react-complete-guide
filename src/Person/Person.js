import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>I'm {props.name} and I am {props.age} years old</p>
      <p style={{color:"red"}}>{props.children}</p>
    </div>
  )
};

export default person;