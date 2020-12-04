import React from 'react';
import styled from 'styled-components'

// RHS returns a react component (so no props like functional component)
// Styled components allow for nicer mix of CSS and JS compared to radium
const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`

// Stateless/Dumb/Presentational component
// Attributes passed into HTML component come into props (properties) argument
// we constructed a component tree: a hierarchy ofcomponents that data was able to flow through as properties 
const Person = (props) => {
  // We need the wrapper <div> with paranthesis to write component with
  // multiple elements over multiple lines

  return (
    // <div className="Person" style={style}>
    // This div should have theses styles (with styled components)
    <StyledDiv>
      < p onClick={props.click} > I'm {props.name} and I am {props.age} years old</p>
      {/*Note that a JS Object is passed for style attribute */}
      {/*Note the special children property to access any elements between tags*/}
      <p>{props.children}</p>
      {/*Two way binding on input element */}
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  )
};

export default Person;