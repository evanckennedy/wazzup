import React from 'react'
import AuthHeader from './AuthHeader';
import AuthForm from './AuthForm';
import AuthPrompt from './AuthPrompt';

function AuthSection({isLoginDisplay, toggleDisplay}) {
  return (
    <section className='flex flex-column auth-section gap-20'>
      <AuthHeader />
      {/* Conditionally render WelcomeMessage, AuthForm, and AuthPrompt based on isLoginDisplay */}
      <AuthForm isLoginDisplay={isLoginDisplay} />
      <AuthPrompt isLoginDisplay={isLoginDisplay} toggleDisplay={toggleDisplay}/>
    </section>
  )
}

export default AuthSection