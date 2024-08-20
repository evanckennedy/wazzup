import express from 'express';
import { handleCreateUser } from '../controllers/userController.js';

// Create a new router instance using the Express.js Router class
const router = express.Router(); 

// Define a POST route for creating a new user, handled by the handleCreateUser function
router.post('/users', handleCreateUser);

export default router;