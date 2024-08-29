import React from 'react'
import { useAuth } from '../contexts/AuthContext'

function LogoutButton() {
  const { clearToken } = useAuth();

  const handleLogout = () => {
    clearToken();
    // redirect to authentication page
    window.location.href = '/'
  }
  return (
    <button className='logout-btn' onClick={handleLogout}>Log out</button>
  )
}

export default LogoutButton