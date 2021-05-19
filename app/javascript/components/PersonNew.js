import React from 'react'
const PersonNew = (props) => {
  return(
    <>
    <div>
      <h1>New Profile Form</h1>
      <form action='/people' method='post'>
        <p>Name</p>
        <input name='person[name]' />
        <p>Age</p>
        <input name='person[age]' />
        <button type='submit'>Add</button>
      </form>
    </div>
    </>
  )
}






export default PersonNew