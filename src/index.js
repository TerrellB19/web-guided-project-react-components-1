import React from 'react'
import { render } from 'react-dom'
import Playground from './components/Playground'

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/

const name = 'Terrell'
console.log(`Hi my name is ${name}`)

function App(props) {
  return (
    <div className='container'>
      <h1>Welcome to React, {props.track} rockstars!!</h1>
      <h2>Student name: {props.name}, age: {props.age}</h2>
      <h3>Are you happy? {props.happy}</h3>
      <Playground />
    </div>
  )
}

render(
  <App track='Web' name='Terrell' happy='YES' age={22} />,
  document.querySelector('#root')
)
