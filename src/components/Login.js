import React from 'react'
import '../styles/Login.css';

const Login = ({handleLogIn}) => {
  return (
    <div className='container'>
      <h1 style={{textAlign: 'center', fontWeight: 'lighter', marginTop: '20px'}}>Login</h1>
      <div className='loginBox'>
        <input className='emailInput' placeholder='Email'/>
        <input className='passInput' placeholder='Password'/>
        <button onClick={handleLogIn} className="loginPageBtn">Log In</button>
      </div>
    </div>
  )
}

export default Login