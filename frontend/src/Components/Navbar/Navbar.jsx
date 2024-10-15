import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {

  const [menu,setMenu] = useState("home"); 

  return (
    <div className='navbar'>
      <div className='logo'>
       <img src={logo} alt="" />
       <p>TRVL</p>  
      </div>
       <ul className="nav-menu">
        <li onClick={() => {setMenu("home")}}><Link style={{textDecoration:'none' }}  to='/Home'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("Tours")}}><Link style={{textDecoration:'none'}} to='/Tours'>Tours</Link>{menu==="Tours"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("about")}}><Link style={{textDecoration:'none'}} to='/About'>About</Link>{menu==="about"?<hr/>:<></>}</li>
       </ul>
       <div className="login">
        <Link style={{textDecoration:'none'}} to = './Login'><button className='eee'>Login</button></Link>
        <Link style={{textDecoration:'none'}} to = './Register'><button className='rrrr'>Register</button></Link>
       </div>
    </div>
  )
}

export default Navbar
