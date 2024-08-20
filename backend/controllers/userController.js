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
  const {username, passowrd} = req.body;
  try {
    //get the token by calling authenticateUser function
    // respond w/ 200 status & and the token
  } catch (error) {
    console.error('Error logging in', error);
    res.status(400).send('Invalid username or password');
  }
}