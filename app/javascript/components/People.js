import React from 'react'

const People = (props) => {
  const people = props.people

  const renderPeople = () => {

    return people.map( (person) => {

    
      return(
        <div id="border">
          <h1>{person.name}</h1>
          <h2>{person.age}</h2>
          <div >
             <p>
          <a href={`people/${person.id}`}>Show Profile</a>
          </p>
          </div>
          <div>
             <p>
          <a href={`people/${person.id}/edit`}>Edit Profile</a>
          </p>
          </div>
          <div>
             <p>
          <a href={`people/${person.id}`} data-method = "delete">Delete Profile</a>
          </p>
          </div>
        </div>
      )
    })
  }
  return(
    <div>
      <h1 id="largefont">My Favorite People</h1>
      <p>
      <a href="/people/new">Create a New Profile</a>
      </p>
      {renderPeople()}
    </div>
  )
}

export default People