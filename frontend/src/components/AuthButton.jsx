import React from 'react'

// Reusable button component that accepts text as a prop
function AuthButton({text}) {
  return (
    <button className='auth-button' type='submit'>{text}</button>
  )
}

export default AuthButton