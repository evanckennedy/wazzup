import axios from 'axios'
import { useAuth } from '../contexts/AuthContext'

const API_URL = 'http://localhost:5000/api';

// create an axios instance
const api = axios.create({
  baseURL: API_URL
})

// create an interceptor
api.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token');

  // if there's a token, add an Authorization header to the request config with the token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, error => {
  return Promise.reject(error);
});

// User API
export const registerUser = async userData => {
  try {
    const response = await api.post(`${API_URL}/users`, userData) 
    return response.data
  } catch (error) {
    console.error('Error registering user:', error)
    throw error;
  }
}

export const loginUser = async userData => {
  try {
    const response = await api.post(`${API_URL}/users/login`, userData)
    return response.data
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error
  }
}

export const getUserDetails = async () => {
  try {
    const response = await api.get(`${API_URL}/users/me`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error)
    throw error
  }
}

// Contact API
export const getUserContacts = async () => {
  try {
    const response = await api.get(`${API_URL}/contacts`)
    return response.data
  } catch (error) {
    console.error('Error fetching contacts:', error)
    throw error;
  }
}

// Chat API
export const getUserChats = async () => {
  try {
    const response = await api.get(`${API_URL}/chats`)
    return response.data
  } catch (error) {
    console.error('Error fetching chats:', error)
    throw error
  }
} 

// Message API