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
  return (
    <div>
      <div>
        <form action="">
          <div className='mb-3'>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter Email"/>
        </div>
          <div className='md-3'>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password"/>
          </div>
          <button className="btn btn-success">Log in</button>
          <button className='btn btn-default border'>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Account
