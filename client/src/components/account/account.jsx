import React, { useState } from 'react';
import './account.css'; // Import the CSS file
// import { Link } from 'react-router-dom'


const Account = () => {
  return (
    <div className="account-page">
      <h2>Account</h2>
      <div className="form-container">
        <LoginForm />
        <SignUpForm />
      </div>
    </div>
  );
};

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission
  };

  return (
    <div className="login-form">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const SignUpForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up form submission
  };

  return (
    <div className="signup-form">
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

// export default Account;

// function Account() {
//   return (
//     <div className="login" id="login">
//       <div>
//         <form className="form login-form" id="loginSignUpForms">
//           <div id="form">
//         <h3>Login</h3>
//           <div className='mb-3'>
//           <label htmlFor="name-login" className="form-label" id="header">Username</label>
//           <input className="form-control" type="text" placeholder="Enter Username" id="username-login" aria-describedby="nameEmailHelp" />
//         </div>
//           <div className='md-3'>
//             <label htmlFor="password-login" className="form-label">Password</label>
//             <input className="form-control" type="password" id="password-login"/>
//           </div>
//           <button className="btn btn-primary" id="loginBtn" type="submit">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

export default Account
