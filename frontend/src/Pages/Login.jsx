import React from 'react'
import '../Components/Login/Login.css'
import Login_pic from '../Components/Assests/login.png'
import Man from '../Components/Assests/Man.png'   
import { Link } from 'react-router-dom'
import Register from './Register'
const Login = () => {
  return (
    <div className='Logins'>
      <div className="login_container">
        
        <div className="wholeregis">
        <img src={Login_pic} alt="" />
        <div className="login_fieldss">
        <img src={Man} alt="" />
          <h1>Login</h1>
          {/* <input type="text" placeholder='Your Name' /> */}
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password' />
          <button>Login</button>
          <div className='Agree'>
          <input type="checkbox" name='' id='' />
          <p>By Continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <div className="last">
          <p>Dont have an account? <span><Link  to="/Register">Register</Link></span></p>
     
        </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Login
