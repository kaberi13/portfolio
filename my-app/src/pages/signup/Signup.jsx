import React from 'react'
import './Signup.css'
function Signup() {
  return (
  <div id="signupbox">
      <div id='signupcon'>
        <label for='fname'>First name</label>
        <input className='signupint' type='text' name='fname'></input>
        <label for='lname'>Last name</label>
        <input className='signupint' type='text' name='lname'></input>
        <label for='pass'>Password</label>
        <input className='signupint' type='password' placeholder='@abc123' name='pass'></input>
        <label for='repass'>Re-enter Password</label>
        <input className='signupint' type='password' placeholder='@abc123'></input>
        <button id='signupbutton' type='submit'>Signup</button>
    </div>
  </div>
  )
}

export default Signup