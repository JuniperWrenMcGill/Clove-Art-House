import React from 'react';
import './account.css'; // Import the CSS file
import { Link } from 'react-router-dom'

function Account() {
  const logInForm = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
  
    })
    if (response.ok) {
      // alert(response.status);
    } else {
      // alert(response.statusText);
    }
  }

  const signUpForm = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
   
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
  
    })
    if (response.ok) {
      alert(response.status);
    } else {
      alert(response.statusText);
    }

    // Handle sign up form submission
};
  return (
    <div>
      <div>
        <form action="">
          <div className='mb-3'>
          <label  htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter Email"/>
        </div>
          <div className='md-3'>
            <label  htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password"/>
          </div>
          <button onClick={logInForm} className="btn btn-success">Log in</button>
          <button onClick={signUpForm} className='btn btn-default border'>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Account
