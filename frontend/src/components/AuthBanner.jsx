import React from 'react'
import AuthBannerImg from '../media/auth-banner-img.webp'
import WelcomeMessage from './WelcomeMessage'

function AuthBanner({isLoginDisplay}) {
  return (
    <section className='flex flex-column auth-section auth-banner'>
      <img className='auth-banner-img' src={AuthBannerImg} alt="authorization banner image" />
      <WelcomeMessage isLoginDisplay={isLoginDisplay}/>
    </section>
  )
}

export default AuthBanner