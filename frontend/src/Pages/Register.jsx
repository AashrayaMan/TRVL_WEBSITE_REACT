import React, { useState } from 'react'
import '../Components/Login/Login.css'
import Regis_pic from '../Components/Assests/register.png'
import Man from '../Components/Assests/Man.png'
import { Link } from 'react-router-dom'
const Register = () => {
  const [myname,setMyname] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
 
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "AdarshT") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(myname, email, password);
      fetch("http://localhost:3000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          myname,
          email,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };
  return (
    <div className='Logins'>
      <div className="login_container">
        
        <div className="wholeregis">
        <img src={Regis_pic} alt="" />
        <div className="login_fields">
          <img src={Man} alt="" />
          <h1>Register</h1>
          <input type="text" placeholder='Your Name' onChange={(e) => setMyname(e.target.value)}/>
          <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
          <button>Create Account</button>
          <div className="regislast">
           <p>Already have an account? 
           <span><Link to="/Login"> Login</Link></span></p>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Register
