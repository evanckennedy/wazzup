import React, { useState } from 'react'

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <form action="">
      <input 
        type="text"
        placeholder='Name'
        value={name} 
        onChange={e => setName(e.target.value)}
      />
      <input 
        type="email" 
        placeholder='Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input 
        type="password"
        placeholder='Password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type='submit'>Sign Up</button>
    </form>
  )
}

export default RegisterForm