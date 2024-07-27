import React from 'react'

function AuthPrompt({ isLoginDisplay }) {
  return (
    <p>
      {isLoginDisplay ? (
        <>Don't have an account? Sign up <a href="/signup">here</a>.</>
      ) : (
        <>Already have an account? Login <a href="/login">here</a>.</>
      )}
    </p>
  )
}

export default AuthPrompt