import React, { useState } from 'react'
import AuthHeader from './AuthHeader';
import WelcomeMessage from './WelcomeMessage';
import AuthForm from './AuthForm';
import AuthPrompt from './AuthPrompt';

function AuthSection() {
  // State to determine whether to show login or register display
  const [isLoginDisplay, setIsLoginDisplay] = useState(true);

  // Function to toggle between login and register display
  const toggleDisplay = () => {
    setIsLoginDisplay(!isLoginDisplay);
  }
  return (
    <section>
      <AuthHeader />
      {/* Conditionally render WelcomeMessage, AuthForm, and AuthPrompt based on isLoginDisplay */}
      <WelcomeMessage isLoginDisplay={isLoginDisplay}/>
      <AuthForm isLoginDisplay={isLoginDisplay}/>
      <AuthPrompt isLoginDisplay={isLoginDisplay} toggleDisplay={toggleDisplay}/>
    </section>
  )
}

export default AuthSection