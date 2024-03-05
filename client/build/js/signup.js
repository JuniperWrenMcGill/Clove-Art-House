// import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
// import Validation from '/SignupValidation';

// function Signup() {

//   const [values, setValues] = useState({
//     name: '',
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
//     if(errors.name === "" && errors.email === "" && errors.password === "") {
//       axios.post('http://localhost:3001/signup', values)
//       .then(res => {
//         navigate('/');
//       })
//       .catch(err => console.log(err));
//     }
//   }

//   return (
//     <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
//     <div className='bg-white p-3 rounded w-25'>
//       <h2>Sign Up</h2>
//       <form action="" onSubmit={handleInput}>
//       <div className='mb-3'>
//         <label htmlFor="name"><strong>Name</strong></label>
//         <input type="text" placeholder="Enter Name" name='name'
//         onChange={handleInput} className='form-control rounded-0'/>
//       {errors.name && <span className='text-danger'> {errors.name}</span>}
//       </div>
//         <div className='mb-3'>
//         <label htmlFor="email"><strong>Email</strong></label>
//         <input type="email" placeholder="Enter Email" name='email'
//         onChange={handleInput} className='form-control rounded-0'/>
//       {errors.email && <span className='text-danger'> {errors.email}</span>}
//       </div>
//         <div className='md-3'>
//           <label htmlFor="password"><strong>Password</strong></label>
//           <input type="password" placeholder="Enter Password" name='password'
//           onChange={handleInput} className='form-control rounded-0'/>
//         {errors.password && <span className='text-danger'> {errors.password}</span>}
//         </div>
//         <button className="btn btn-success w-100"><strong>Sign Up</strong></button>
//         <Link to="/" className='btn btn-default border'>Login</Link>
//       </form>
//     </div>
//   </div>
//   )
// }

// export default Signup

const signupFormHandler = async (event) => {
    event.preventDefault();
    
  
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
  
    if (!username || !password || password.length < 8) {
  
    }
  
    if (username && password && password.length >= 8) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
  
      
        if (response.ok) {
            document.location.replace('/');
        } else {
          
        }
    }
  };
  
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  
  
  document
    .querySelector('#signupBtn')
    .addEventListener('click', signupFormHandler);
