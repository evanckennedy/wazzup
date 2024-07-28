import React, { useState } from 'react'
import AuthButton from './AuthButton';

function LoginForm() {
  // State to manage email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form action="" className='flex flex-column gap-10'>
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
      <AuthButton text='Login' />
    </form>
  )
}

export default LoginForm