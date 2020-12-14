import React, { Component } from 'react'
import classes from './Person.module.css'

// Stateless/Dumb/Presentational component
// Attributes passed into HTML component come into props (properties) argument
// we constructed a component tree: a hierarchy ofcomponents that data was able to flow through as properties 
class Person extends Component {

  render() {
    console.log('[Person.js] rendering...')
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}> I'm {this.props.name} and I am 
        {this.props.age} years old</p>
        {/*Note that a JS Object is passed for style attribute */}
        {/*Note the special children property to access any elements between 
      tags*/}
        <p>{this.props.children}</p>
        {/*Two way binding on input element */}
        <input 
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} />
      </div >
    )
  }
};

export default Person;