import React from 'react';
// Stateless/Dumb/Presentational component
// Attributes passed into HTML component come into props (properties) argument
// we constructed a component tree: a hierarchy ofcomponents that data was able to flow through as properties 
const person = (props) => {
  // We need the wrapper <div> with paranthesis to write component with
  // multiple elements over multiple lines

  

  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
      {/*Note that a JS Object is passed for style attribute */}
      {/*Note the special children property to access any elements between tags*/}
      <p>{props.children}</p>
      {/*Two way binding on input element */}
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;