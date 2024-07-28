import React from 'react'
import AuthBanner from '../components/AuthBanner'
import AuthSection from '../components/AuthSection';

function Authorization() {
  return (
    <div className='flex authorization-container'>
      <AuthBanner />
      <AuthSection />
    </div>
  )
}

export default Authorization