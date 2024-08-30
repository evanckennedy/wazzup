import React, { createContext, useContext, useEffect, useState } from 'react'
import { getUserDetails } from '../services/api';

// Create a context for authentication
const AuthContext = createContext()

// Custom hook to easily access the AuthContext in any component
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap the entire app
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem('token'));
  const [user, setUser] = useState(null)

  const saveToken = newToken => {
    sessionStorage.setItem('token', newToken)
    setToken(newToken)
  }

  const clearToken = () => {
    sessionStorage.removeItem('token');
    setToken('');
  }

  const logout = () => {
    clearToken();
    window.location.href = '/'
  }

  const fetchUserData = async () => {
    const userDetails = await getUserDetails()
    setUser(userDetails)
    console.log(user)
  }

  useEffect(() => {
    if (token) {
      fetchUserData()
    }
  }, [token])

  return (
    // <AuthContext.Provider> holds the authentication data
    <AuthContext.Provider value={{ token, saveToken, clearToken, logout }}>
      {/* the children prop is being rendered inside the context provider.
          this means that any components wrapped by the AuthProvider will have access to the authentication context
      */}
      {children} 
    </AuthContext.Provider>
  )
}
