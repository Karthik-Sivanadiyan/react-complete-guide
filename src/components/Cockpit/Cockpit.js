import React from 'react'
import classes from './Cockpit.module.css'
const Cockpit = (props) => {

  let btnClass = ''
  if (props.showPersons) {
    btnClass = classes.Red
  }
  const msgClasses = []
  if (props.persons.length <= 2) {
    console.log('Here')
    msgClasses.push(classes.red) // classes = ['red']
  }
  if (props.persons.length <= 1) {
    console.log('Here 2')
    msgClasses.push(classes.bold) // classes = ['red', 'bold']
    console.log(msgClasses)
  }

  // Okay to return lists with no wrapper div but not multiple hardcoded elems
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={msgClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>Toggle 
      Persons</button>
    </div>
  )
}

export default Cockpit