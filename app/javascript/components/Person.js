import React from 'react'

const Person = (props) => {
  const {person} = props
  return(
    <div>
      <h1>{person.name}</h1>
      <p>{person.age}</p>
      <a href="/people">Back to People</a>
    </div>
  )
}

export default Person