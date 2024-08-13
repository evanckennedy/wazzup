import React, { useState } from 'react'
import AuthButton from './AuthButton';
import { validate } from '../utils/validation'

function LoginForm() {
  // State to manage email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSumbit = e => {
    e.preventDefault();
    const newErrors = validate({email, password});
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // submit form
      console.log('Form submitted');
    }
  }

  return (
    <form action="" className='flex flex-column auth-form' onSubmit={handleSumbit}>
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
        </div>
        <div className="error-message-container">
          {errors.password && <span className='error-message'>{errors.password}</span>}
        </div>
      <AuthButton text='Login' />
    </form>
  )
}

export default LoginForm