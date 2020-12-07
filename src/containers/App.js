// React must be imported to properly work with React JSX syntax
// Hooks contain reusable code logic that is separate from thecomponent tree. They allow us to hook up functionality to ourcomponents.
import React, { Component } from 'react';
import classes from './App.module.css'
// Importing CSS is okay (is not included, just to inform WebPack)
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

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
      { id: 'abc', name: 'Max', age: 28 },
      { id: 'def', name: 'Manu', age: 29 },
      { id: 'ghj', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  // Best practice to append "*Handler" to methods not actively called but assigning as event handler later
  // Note this is valid JS code (a function inside of a function), used commonly with Hooks
  nameChangedHandler = (event, id) => {
    // console.log('Was clicked!')
    // Manipulate the state in the handler
    // DON'T DO THIS (doesn't merge or tell react state has been updated for new rendering): this.state.persons[0].name = 'Maximilian'
    // Use setState(...) instead
    // THIS DOES NOT MERGE BUT REPLACES STATE (So use multiple useState(...) calls)
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })

    // Deep copy to not mutate objects directly 
    const personCopy = {
      ...this.state.persons[personIndex]
    }
    personCopy.name = event.target.value
    const personsCopy = [...this.state.persons]
    personsCopy[personIndex] = personCopy

    this.setState({ persons: personsCopy })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {

    // Take advantage of fact that render() is recalled upon state change ("if")
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      )
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    )
  }
}

export default App;