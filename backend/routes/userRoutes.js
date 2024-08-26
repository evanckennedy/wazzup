import express from 'express';
import { handleCreateUser, handleLogin, handleGetUserDetails } from '../controllers/userController.js';

// Create a new router instance using the Express.js Router class
const router = express.Router(); 

// Define a POST route for creating a new user, handled by the handleCreateUser function
router.post('/users', handleCreateUser);

// Define a POST route for logging in, handled by the handleLogin function
router.post('/users/login', handleLogin);

// Define a GET route for fetching a user, handles by the handleGetUserDetails function
router.get('/users/me', handleGetUserDetails);

export default router;