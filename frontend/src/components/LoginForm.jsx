import React, { useState } from 'react'

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form action="">
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
      <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm