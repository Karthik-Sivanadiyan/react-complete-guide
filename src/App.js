// React must be imported to properly work with React JSX syntax
// Hooks contain reusable code logic that is separate from thecomponent tree. They allow us to hook up functionality to ourcomponents.
import React, { Component } from 'react';
import './App.css'
// Importing CSS is okay (is not included, just to inform WebPack)
import './Person/Person.css'
import Person from './Person/Person'

// Stateful/Smart/Container component
class App extends Component {
  // We just hooked this component up with state. The useState hook is a function that we can invoke to return an array. 
  // The first value of thatarray is the state variable we want to use.
  // The second item in the array that’s returned by the useState hook is a function that can be used to change the state value
  // Use array destructuring to pull elements out of array on RHS
  // When the state of a component tree changes, so do the properties. The new 
  // data flows through the tree, causing specific leaves and branches to render 
  // to reflect the newcontent.
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  // Best practice to append "*Handler" to methods not actively called but assigning as event handler later
  // Note this is valid JS code (a function inside of a function), used commonly with Hooks
  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // Manipulate the state in the handler
    // DON'T DO THIS (doesn't merge or tell react state has been updated for new rendering): this.state.persons[0].name = 'Maximilian'
    // Use setState(...) instead
    this.setState({ // THIS DOES NOT MERGE BUT REPLACES STATE (So use multiple useState(...) calls)
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    console.log(event);
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 }, // event target is the input element
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  // A call to ReactDOM.render to render our component into the current DOM
  render() {
    // Not a class property but a normal variable in a function
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/*DON'T add paranthesis after this.switchNameHandler because that will execute it*/}
        <button style={style} onClick={() => this.switchNameHandler('Maximilian!!')}>Switch name</button>

        {/*Reusing a component three times*/}

        {/*name and age are examples of dynamic components passed in as HTML attributes */}
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />

        {/*This element can pass content passed between opening and closing tags as a prop too */}
        {/*We also pass a method that to dumb components that don't have direct access to state */}
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    )
  }
}

export default App;



