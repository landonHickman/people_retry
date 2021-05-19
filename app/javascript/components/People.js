import React from 'react'

const People = (props) => {
  const people = props.people

  const renderPeople = () => {

    return people.map( (person) => {

    
      return(
        <div>
          <h1>{person.name}</h1>
          <h2>{person.age}</h2>
          <div>
          <a href={`people/${person.id}`}>Show Profile</a>
          </div>
          <div>
          <a href={`people/${person.id}/edit`}>Edit Profile</a>
          </div>
          <div>
          <a href={`people/${person.id}`} data-method = "delete">Delete Profile</a>
          </div>
        </div>
      )
    })
  }
  return(
    <div>
      <h1>My Favorite People</h1>
      <a href="/people/new">Create a New Profile</a>
      {renderPeople()}
    </div>
  )
}

export default People