import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// Creates a new user document in the database with the provided name, username, and password
export async function createUser(name, username, password) {
  const user = new User({
    name,
    username,
    password
  })
  await user.save()
}

/*
 Authenticates a user with the provided username and password.
 Returns a JSON Web Token (JWT) if authentication is successful.
 Throws an error if the username or password is invalid.
 */
export async function authenticateUser(username, password) {
  const user = await User.findOne({username})
  if (!user) {
    throw new Error('Invalid username or password')
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    throw new Error('Invalid username or password')
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
  return token;
}

// Service function to get user by ID
export async function getUserById(id) {
  try {
    // get the user by id but exclude password
    const user = await User.findById(id).select('-password');
    return user;
  } catch (error) {
    throw new Error('Error fetching user details');
  }
}