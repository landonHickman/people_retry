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
          <p>
          <input defaultValue={person.name} name='person[name]'/>
          </p>
          <p>Age</p>
          <p>
          <input defaultValue={person.age} name='person[age]'/>
          </p>
          <p>
          <button type="submit">update</button>
          </p>
        </form>
      </div>
    </>
  )
}

export default PersonEdit 