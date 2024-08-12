import React, { useState } from 'react'
import AuthButton from './AuthButton';

function RegisterForm() {
  // State to manage name, email, and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <form action="" className='flex flex-column gap-15 auth-form'>
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
      <AuthButton text='Sign Up' />
    </form>
  )
}

export default RegisterForm