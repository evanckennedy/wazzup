import React from 'react'
import { useAuth } from '../contexts/AuthContext'

function LogoutButton() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout()
  }
  return (
    <button className='logout-btn' onClick={handleLogout}>Log out</button>
  )
}

export default LogoutButton