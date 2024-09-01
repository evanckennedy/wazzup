import Contact from '../models/Contact.js'
import User from '../models/User.js';
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const jwtSecret = process.env.JWT_SECRET

// business logic function for adding contact
export async function createContact(token, contactId) {
  // using the jwt.verify() function to verify the authenticity and integrity JWT using my secret key.
  const decoded = jwt.verify(token, jwtSecret)

  // Extract the user ID from the decoded JWT payload
  const userId = decoded.id;

  const newContact = new Contact({
    userId,
    contactId,
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
  // Find the user by ID and populate the contacts array with contactId populated with username and name
  const user = await User.findById(userId).populate({
    path: 'contacts',
    populate: {
      path: 'contactId',
      select: 'username name' // Select only the username and name fields
    }
  });

  // Check if the user exists
  if (!user) {
    throw new Error('User not found');
  }

  // return the user's contacts
  return user.contacts;
}

// function to delete a contact
export async function deleteContact(userId, contactId) {
  const user = await User.findById(userId)

  if (!user) {
    throw new Error('User not found');
  }

  // Remove the contact from the user's contacts list
  user.contacts = user.contacts.filter(contact => contact.toString() !== contactId) // `contact` is naturally an ObjectID and `contactId` is a string.

  // Save the updated user document
  await user.save();

  // remove the contact from the contacts collection
  await Contact.findByIdAndDelete(contactId);
}