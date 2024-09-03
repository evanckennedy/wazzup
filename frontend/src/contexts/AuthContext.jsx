import React, { createContext, useContext, useEffect, useState } from 'react'
import { getUserDetails, getUserContacts, getUserChats, createChat as apiCreateChat, createContact as apiCreateContact } from '../services/api';

// Create a context for authentication
const AuthContext = createContext()

// Custom hook to easily access the AuthContext in any component
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap the entire app
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem('token'));
  const [user, setUser] = useState(null)
  const [contacts, setContacts] = useState([])
  const [chats, setChats] = useState(null)

  const saveToken = newToken => {
    sessionStorage.setItem('token', newToken)
    setToken(newToken)
    window.location.href = '/chat'
  }

  const clearToken = () => {
    sessionStorage.removeItem('token');
    setToken('');
  }

  const logout = () => {
    clearToken();
    setUser(null)
    setContacts([])
    setChats(null)
    window.location.href = '/'
  }

  const fetchUserData = async () => {
    try {
      const userDetails = await getUserDetails()
      const userContacts = await getUserContacts()
      const userChats = await getUserChats()
      setUser(userDetails)
      setContacts(userContacts)
      setChats(userChats)
    } catch (error) {
      console.log('Error fetching user details', error)
      logout()
    }
  }

  const createContact = async contact => {
    try {
      await apiCreateContact(contact)
      const updatedContacts = await getUserContacts();
      setContacts(updatedContacts)
    } catch (error) {
      console.error('Error creating contact:', error)
      throw error
    }
  }

  const createChat = async participants => {
    try {
      await apiCreateChat(participants)
      const updatedChats = await getUserChats()
      setChats(updatedChats)
    } catch (error) {
      console.error('Error creating chat:', error)
      throw error
    }
  }

  useEffect(() => {
    if (token) {
      fetchUserData()
    }
  }, [token])

  // debugging use effect hooks. Delete later
  useEffect(() => {
    if (user) {
      console.log('User:', user)
    }
  }, [user])
  useEffect(() => {
    if (contacts && contacts.length > 0) {
      console.log('Contacts', contacts)
    }
  }, [contacts])
  useEffect(() => {
    if (chats) {
      console.log('Chats:', chats)
    }
  }, [chats])

  return (
    // <AuthContext.Provider> holds the authentication data
    <AuthContext.Provider value={{ token, saveToken, clearToken, logout, contacts, user, chats, createContact, createChat }}>
      {/* the children prop is being rendered inside the context provider.
          this means that any components wrapped by the AuthProvider will have access to the authentication context
      */}
      {children} 
    </AuthContext.Provider>
  )
}
