import React from 'react';
import './account.css'; // Import the CSS file
import { Link } from 'react-router-dom'


// const Account = () => {
//   return (
//     <div className="account-page">
//       <h2>Account</h2>
//       <div className="form-container">
//         <LoginForm />
//         <SignUpForm />
//       </div>
//     </div>
//   );
// };

// const LoginForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login form submission
//   };

//   return (
//     <div className="login-form">
//       <h3>Login</h3>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" required />
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// const SignUpForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle sign up form submission
//   };

//   return (
//     <div className="signup-form">
//       <h3>Sign Up</h3>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" required />
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" required />
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" required />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Account;

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
