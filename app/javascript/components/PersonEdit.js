import React from 'react'

const PersonEdit = (props) => {
  const {person} = props
  return(
    <>
      <div>
        <h1>Profile Edit</h1>
        <form action={`/people/${person.id}`} method="post">
          <input type="hidden" name="_method" value="patch"/>
          <p>Name</p>
          <input defaultValue={person.name} name='person[name]'/>
          <p>Age</p>
          <input defaultValue={person.age} name='person[age]'/>
          <button type="submit">update</button>
        </form>
      </div>
    </>
  )
}

export default PersonEdit 