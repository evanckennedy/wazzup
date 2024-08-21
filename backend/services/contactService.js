import Contact from '../models/Contact.js'
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
  return newContact
}

// business logic function for fetching contact