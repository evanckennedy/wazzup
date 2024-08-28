import { createUser, authenticateUser, getUserById } from "../services/userService.js"
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const jwtSecret = process.env.JWT_SECRET

// Handles user creation request: extracts user data, calls CreateUser, and returns success/error response
export async function handleCreateUser(req, res) {
  // Using object destructuring to extract the name, username, and password properties from the request body.
  const {name, username, password} = req.body
  try {
    await createUser(name, username, password)

    // Authenticate the user immediately after creation
    const token = await authenticateUser(username, password);

    // Return a successful response (201) with the generated token in JSON format
    res.status(201).json({ token });
  } catch (error) {
    // Setting the HTTP response status to 500 (Internal Server Error) and sending an error message
    console.error('Error creating user:', error)
    res.status(500).send('Error creating user')
  }
}

// Handles user login request: extracts user data, calls authenticateUser, and returns token or error response
export async function handleLogin(req, res) {
  const {username, password} = req.body;
  try {
    // Call the authenticateUser function to verify credentials and generate a token
    const token = await authenticateUser(username, password)
    
    // Return a successful response (200) with the generated token in JSON format
    res.status(200).json({token})
  } catch (error) {
    console.error('Error logging in', error);
    res.status(400).send('Invalid username or password');
  }
}

// Controller function to get user details
export async function handleGetUserDetails(req, res) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, jwtSecret);
    const userId = decoded.id;

    const user = await getUserById(userId); 
    if (!user) {
      // Return a 404 Not Found response if the user is not found
      return res.status(404).json({ message: 'User not found' })
    }
    res.json(user);
  } catch (error) {
    // Log the error to the console for debugging purposes
    console.error('Error getting user', error);
    // Return a 500 Internal Server Error response to the client
    res.status(500).json({ message: 'Server error' })
  }
}