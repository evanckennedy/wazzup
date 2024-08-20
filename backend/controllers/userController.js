import { createUser } from "../services/userService.js"

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