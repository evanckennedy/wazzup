import React from 'react'
import AuthBannerImg from '../media/auth-banner-img.webp'

function AuthBanner() {
  return (
    <section className='flex flex-column auth-section auth-banner'>
        <img className='auth-banner-img' src={AuthBannerImg} alt="authorization banner image" />
        <h2>Lorem, ipsum.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi alias sunt placeat.</p>
      </section>
  )
}

export default AuthBanner