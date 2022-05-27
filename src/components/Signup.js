import React from 'react'
import  '../styles/signup.css'

const Signup = ({handlesignup}) => {
  return (
    <div className='container'>
        <div class="container">
            <header>LOGIN FORM</header>
            <form method="post">
            <div className="input-field">
                <input className='fullName' placeholder='Fullname'/>
                <input className='emailId' placeholder='Email'/>
                <input className='dateOfBirth' placeholder='DateOfBirth'/>
                <input className='gender' placeholder='Gender'/>
                <input className='password' placeholder='Password'/>
                <input className='confirmPassword' placeholder='Confirm Password'/>
                </div>
                <div className='button'>
                <button onClick={handlesignup} className='Signup'>Signup</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup;