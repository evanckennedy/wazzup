import React from 'react'
import logoBlack from '../media/logo-black.webp'

function AuthHeader() {
  return (
    <img 
      src={logoBlack} 
      alt="logo"
      className='auth-logo' />
  )
}

export default AuthHeader