import React, { useState } from 'react'
import authBanner from '../media/auth-banner-img.webp'
import AuthHeader from '../components/AuthHeader'
import AuthPrompt from '../components/AuthPrompt'
import AuthForm from '../components/AuthForm'
import WelcomeMessage from '../components/WelcomeMessage'

function Authorization() {
  // State to determine whether to show login or register display
  const [isLoginDisplay, setIsLoginDisplay] = useState(true);

  // Function to toggle between login and register display
  const toggleDisplay = () => {
    setIsLoginDisplay(!isLoginDisplay);
  }

  return (
    <div className='flex'>
      <section className='auth-banner'>
        <img src={authBanner} alt="authorization banner image" />
        <h2>Lorem, ipsum.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi alias sunt placeat.</p>
      </section>
      <section>
        <AuthHeader />
        {/* Conditionally render WelcomeMessage, AuthForm, and AuthPrompt based on isLoginDisplay */}
        <WelcomeMessage isLoginDisplay={isLoginDisplay}/>
        <AuthForm isLoginDisplay={isLoginDisplay}/>
        <AuthPrompt isLoginDisplay={isLoginDisplay} toggleDisplay={toggleDisplay}/>
      </section>
    </div>
  )
}

export default Authorization