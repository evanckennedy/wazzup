import React from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

function AuthForm({isLoginDisplay}) {
  // Conditionally render LoginForm or RegisterForm based on isLoginDisplay
  return (
    isLoginDisplay ? <LoginForm /> : <RegisterForm />
  )
}

export default AuthForm