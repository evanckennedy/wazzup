import mongoose from "mongoose";
import bcrypt from "bcrypt"

/**
 * @file User.js
 * @description Defines the user schema for the backend.
 * @module User
 */

/**
 * @typedef {Object} User
 * @property {string} username - The username of the user.
 * @property {string} name - The name of the user.
 * @property {string} password - The hashed password of the user.
 * @property {Array.<mongoose.Schema.Types.ObjectId>} contacts - The contacts of the user.
 * @property {Date} createdAt - The creation date of the user.
 * @property {Date} updatedAt - The last update date of the user.
 */

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contacts: [{ 
    type: mongoose.Schema.Types.ObjectId, ref: 'Contact' 
  }],
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now,
  },
})

// Hashes the user's password before saving it to the database.
userSchema.pre('save', async function (next) {
  // Generates a salt using the bcrypt library
  // A salt is a random value that is added to the password before it is hashed.
  const salt = await bcrypt.genSalt(); // default salt rounds is 10
  this.password = await bcrypt.hash(this.password, salt)
  // Continue to the next middleware function 
  next();
})

// Creates a Mongoose model for User.
const User = mongoose.model('User', userSchema);

export default User;