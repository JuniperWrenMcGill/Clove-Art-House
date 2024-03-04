// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Validation from '../../../public/js/loginValidation';

// function Login() {
//   const [values, setValues] = useState({
//     email: '',
//     password: ''
//   })

//   const navigate = useNavigate();

//   const [errors, setErrors] = useState({})

//   const handleInput = (event) => {
//     setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setErrors(Validation(values));
//     if(errors.email === "" && errors.password === "") {
//       axios.post('http://localhost:3001/login', values)
//       .then(res => {
//         if(res.data === "Success") {
//           navigate('/home');
//         } else {
//           alert("No record existed");
//         }
//       })
//       .catch(err => console.log(err));
//   }
// }

//   return (
//     <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
//       <div className='bg-white p-3 rounded w-25'>
//         <h2> Sign Up</h2>
//         <form action="" onSubmit={handleSubmit}>
//           <div className='mb-3'>
//           <label htmlFor="email"><strong>Email</strong></label>
//           <input type="email" placeholder="Enter Email" 
//           onChange={handleInput} className='form-control rounded-0'/>
//           {errors.email && <span className='text-danger'> {errors.email}</span>}
//         </div>
//           <div className='md-3'>
//             <label htmlFor="password"><strong>Password</strong></label>
//             <input type="password" placeholder="Enter Password" name='password'
//             onChange={handleInput} className='form-control rounded-0'/>
//             {errors.password && <span className='text-danger'> {errors.password}</span>}
//           </div>
//           <button type='submit' className="btn btn-success w-100"><strong>Log in</strong></button>
//           <button className='btn btn-default border w-100 bg-light'>Create Account</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login