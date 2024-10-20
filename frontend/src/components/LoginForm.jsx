import React, { useState } from 'react'
import AuthButton from './AuthButton';
import { validate } from '../utils/validation'
import { loginUser } from '../services/api';
import { useAuth } from '../contexts/AuthContext'

function LoginForm() {
  // State to manage username and password inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { saveToken } = useAuth()

  // Handle form submission: validate inputs and set errors if any
  const handleSubmit = async e => {
    e.preventDefault();
    setErrors({}); // Reset errors before validation
    const newErrors = validate({username, password});
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const userData = { username, password }
      try {
        // call loginUser with userData
        const response = await loginUser(userData)
        saveToken(response.token);
      } catch (error) {
        console.error('Error logging in user:', error);
      }
    }
  }

  return (
    <form action="" className='flex flex-column auth-form' noValidate onSubmit={handleSubmit}>
      <div className='flex flex-column'>
        <label htmlFor="username" className='auth-label'>Username</label>
        <input 
          type="text" 
          id='username'
          className='auth-input'
          placeholder='Enter your username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <div className="error-message-container">
          {errors.username && <span className='error-message'>{errors.username}</span>}
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