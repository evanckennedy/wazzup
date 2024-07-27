import React from 'react'

function WelcomeMessage({isLoginDisplay}) {
  return (
    <>
      {isLoginDisplay ? (
        <>
          <h2>Good to see you again!</h2>
          <p>Connect with the world</p>
        </>
      ) : (
        <>
          <h2>Welcome to our community!</h2>
          <p>Join us and connect with the world</p>
        </>
      )}
    </>
  )
}

export default WelcomeMessage