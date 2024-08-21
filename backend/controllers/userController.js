import { createUser, authenticateUser } from "../services/userService.js"

// Handles user creation request: extracts user data, calls CreateUser, and returns success/error response
export async function handleCreateUser(req, res) {
  // Using object destructuring to extract the name, username, and password properties from the request body.
  const {name, username, password} = req.body
  try {
    await createUser(name, username, password)

    // Setting the HTTP response status to 201 (Created) and sending a success message
    res.status(201).send('User created successfully')
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
    // use service function to get user by id
    // if there isnt a user, return a message saying there's no user found
  } catch (error) {
    // if there's a server error return it
  }
}