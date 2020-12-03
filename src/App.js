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
    // For code readability fetch the persons array in state
    // SAFER to update state immutably via copy (use spread operator)
    const persons = [...this.state.persons]
    // Use splice to removed one element from array at specified index
    persons.splice(personIndex, 1)
    // Update state by merge
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    // Flip flag after rendering, not that setState MERGES and does NOT REPLACE
    this.setState({ showPersons: !doesShow })
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

    // Take advantage of fact that render() is recalled upon state change ("if")
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {/*This element can pass content passed between opening and closing tags as a prop too */}
          {/*We also pass a method that to dumb components that don't have direct access to state */}
          {/* Output lists with the map method (which exposes second index argument), recall arrays are reference types in JS */
            /* We need unique keys for virtual DOM to efficiently render large lists that change only some elements */
            this.state.persons.map((person, index) => {
              return <Person
                click={() => { this.deletePersonHandler(index) }}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            })
          }
        </div>
      )
    }



    return (
      /* Recall JSX is just calls to ReactDOM.render(...) */
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/*DON'T add paranthesis after this.switchNameHandler because that will execute it*/}
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {/*Reusing a component three times*/}

        {/*name and age are examples of dynamic components passed in as HTML attributes */}
        {/*Conditionaly rendering */}
        {persons}
      </div>
    )
  }
}

export default App;



