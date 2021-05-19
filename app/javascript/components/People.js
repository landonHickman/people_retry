import React from 'react'

const People = (props) => {
  const people = props.people

  const renderPeople = () => {

    return people.map( (person) => {

    
      return(
        <div>
          <h1>{person.name}</h1>
          <p>{person.age}</p>
          <a href={`people/${person.id}`}>Show Profile</a>
          <a href={`people/${person.id}/edit`}>Edit Profile</a>
          <a href={`people/${person.id}`} data-method = "delete">Delete Profile</a>
        </div>
      )
    })
  }
  return(
    <div>
      <h1>My Favorite People</h1>
      <a href="/pages/new">Create a New Profile</a>
      {renderPeople()}
    </div>
  )
}

export default People