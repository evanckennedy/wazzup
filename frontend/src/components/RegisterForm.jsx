import React, { useState } from 'react'
import AuthButton from './AuthButton';

function RegisterForm() {
  // State to manage name, email, and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <form action="" className='flex flex-column gap-10'>
      <div>
        <label htmlFor="name">Name</label>
        <input 
          type="text"
          id='name'
          placeholder='Enter your name'
          value={name} 
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id='email'
          placeholder='Enter your email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
          type="password"
          id='password'
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