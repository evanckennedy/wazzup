import React, { useState } from 'react'
import AuthButton from './AuthButton';

function LoginForm() {
  // State to manage email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form action="">
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        id='email'
        placeholder='Enter your email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input 
        type="password"
        id='password'
        placeholder='Enter your password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <AuthButton text='Login' />
    </form>
  )
}

export default LoginForm