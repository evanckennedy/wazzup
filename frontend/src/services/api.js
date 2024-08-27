import axios from 'axios'

const API_URL = 'http://localhost:5000/api';

// User API
export const registerUser = async userData => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData) 
    return response.data
  } catch (error) {
    console.error('Error registering user:', error)
    throw error;
  }
}

// Contact API

// Chat API 

// Message API