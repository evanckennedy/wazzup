import React, { useState } from 'react'
import AuthButton from './AuthButton';
import { validate } from '../utils/validation';

function RegisterForm() {
  // State to manage name, email, and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});

  // Handle form submission: validate inputs and set errors if any
  const handleSubmit = e => {
    e.preventDefault();
    setErrors({}); // Reset errors before validation
    const newErrors = validate({ name, email, password });
    setErrors(newErrors);
    console.log('Form submitted with:', { name, email, password }); // Debugging line
    if (Object.keys(newErrors).length === 0) {
      // submit form
      console.log('Form submitted');
    }
  }

  return (
    <form action="" className='flex flex-column auth-form' noValidate onSubmit={handleSubmit}>
      <div className='flex flex-column'>
        <label htmlFor="name" className='auth-label'>Name</label>
        <input 
          type="text"
          id='name'
          className='auth-input'
          placeholder='Enter your name'
          value={name} 
          onChange={e => setName(e.target.value)}
        />
        <div className="error-message-container">
          {errors.name && <span className='error-message'>{errors.name}</span>}
        </div>
      </div>
      <div className='flex flex-column'>
        <label htmlFor="email" className='auth-label'>Email</label>
        <input 
          type="email" 
          id='email'
          className='auth-input'
          placeholder='Enter your email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <div className="error-message-container">
          {errors.email && <span className='error-message'>{errors.email}</span>}
        </div>
      </div>
      <div className='flex flex-column'>
        <label htmlFor="password" className='auth-label'>Password</label>
        <input 
          type="password"
          id='password'
          className='auth-input'
          placeholder='Enter your password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div className="error-message-container">
          {errors.password && <span className='error-message'>{errors.password}</span>}
        </div>
      </div>
      <AuthButton text='Sign Up' />
    </form>
  )
}

export default RegisterForm