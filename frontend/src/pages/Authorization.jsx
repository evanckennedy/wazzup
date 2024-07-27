import React, { useState } from 'react'
import authBanner from '../media/auth-image-alt.webp'
import AuthHeader from '../components/AuthHeader'
import AuthPrompt from '../components/AuthPrompt'
import AuthForm from '../components/AuthForm'
import WelcomeMessage from '../components/WelcomeMessage'

function Authorization() {
  const [isLoginDisplay, setIsLoginDisplay] = useState(true);

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
        <WelcomeMessage isLoginDisplay={isLoginDisplay}/>
        <AuthForm isLoginDisplay={isLoginDisplay}/>
        <AuthPrompt isLoginDisplay={isLoginDisplay} toggleDisplay={toggleDisplay}/>
      </section>
    </div>
  )
}

export default Authorization