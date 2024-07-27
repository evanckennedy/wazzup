import React, { useState } from 'react'

function RegisterForm() {
  // State to manage name, email, and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <form action="">
      <label htmlFor="name">Name:</label>
      <input 
        type="text"
        id='name'
        placeholder='Enter your name'
        value={name} 
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input 
        type="email" 
        id='email'
        placeholder='Enter your email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input 
        type="password"
        id='password'
        placeholder='Enter your password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type='submit'>Sign Up</button>
    </form>
  )
}

export default RegisterForm