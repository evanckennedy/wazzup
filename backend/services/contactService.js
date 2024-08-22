import Contact from '../models/Contact.js'
import User from '../models/User.js';
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const jwtSecret = process.env.JWT_SECRET

// business logic function for adding contact
export async function createContact(token, contactId, nickname) {
  // using the jwt.verify() function to verify the authenticity and integrity JWT using my secret key.
  const decoded = jwt.verify(token, jwtSecret)

  // Extract the user ID from the decoded JWT payload
  const userId = decoded.id;

  const newContact = new Contact({
    userId,
    contactId,
    nickname,
  });

  await newContact.save();

  // Update the user's contacts array 
  // findByIdAndUpdate() method is a built-in mongoose method
  await User.findByIdAndUpdate(userId, {
    // add the contact ID to the user's contact array
    $push: { contacts: newContact._id }
  })

  return newContact
}

// business logic function to fetch contacts for a user
export async function getContacts(userId) {
  // Find the user by ID and populate the contacts array
  const user = await User.findById(userId).populate('contacts'); // populate() fetches the referenced documents from the Contact collection and replaces the IDs in the contacts field with the actual contact documents.

  // Check if the user exists
  if (!user) {
    throw new Error('User not found');
  }

  // return the user's contacts
  return user.contacts;
}