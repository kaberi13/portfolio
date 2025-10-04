import React from 'react'
import '../../pages/login/Login.css'
import { useNavigate } from 'react-router-dom'

function Login() {
  
    const navigate=useNavigate()
  return (
   <div id='loginbox'>
    <div id="logincon">
    <label for="uname"><b>Username</b></label>
    <input className='loginint' type="text" placeholder="Enter Username" name="uname" required></input>

    <label for="psw"><b>Password</b></label>
    <input  className='loginint' type="password" placeholder="Enter Password" name="psw" required></input>

    <button className='loginbtn' type="submit">Login</button>
    <button className='loginbtn' onClick={()=>navigate('/Signup')}>Sign up</button>
  </div>
   </div>
  )
}

export default Login