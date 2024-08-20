import express from 'express';
import { handleCreateUser, handleLogin } from '../controllers/userController.js';

// Create a new router instance using the Express.js Router class
const router = express.Router(); 

// Define a POST route for creating a new user, handled by the handleCreateUser function
router.post('/users', handleCreateUser);

// Define a POST route for logging in, handled by the handleLogin function
router.post('/users/login', handleLogin);

export default router;