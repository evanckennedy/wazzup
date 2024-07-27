import React from 'react'

function AuthPrompt({ isLoginDisplay, toggleDisplay }) {
  return (
    <p>
      {isLoginDisplay ? (
        // Prompt to switch to register display
        <>Don't have an account? Sign up <span onClick={toggleDisplay}>here</span>.</>
      ) : (
        // Prompt to switch to login display
        <>Already have an account? Login <span onClick={toggleDisplay}>here</span>.</>
      )}
    </p>
  )
}

export default AuthPrompt