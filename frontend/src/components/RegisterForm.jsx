import React, { useState } from 'react'
import AuthButton from './AuthButton';
import { validate } from '../utils/validation';
import { registerUser } from '../services/api';
import { useAuth } from '../contexts/AuthContext'

function RegisterForm() {
  // State to manage name, username, and password inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});
  const { saveToken } = useAuth()

  // Handle form submission: validate inputs and set errors if any
  const handleSubmit = async e => {
    e.preventDefault();
    setErrors({}); // Reset errors before validation
    const newErrors = validate({ name, username, password });
    setErrors(newErrors);
    console.log('Form submitted with:', { name, username, password }); // Debugging line
    if (Object.keys(newErrors).length === 0) {
      // Collect user data
      const userData = { name, username, password }
      try {
        // call registerUser with the user data
        const response = await registerUser(userData);
        saveToken(response.token)
        console.log('User registered successfully:', response)
      } catch (error) {
        console.error('Error registering user:', error);
      }
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
        <div className="error-message-container">
          {errors.password && <span className='error-message'>{errors.password}</span>}
        </div>
      </div>
      <AuthButton text='Sign Up' />
    </form>
  )
}

export default RegisterForm