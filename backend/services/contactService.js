import Contact from '../models/Contact.js'
import jwt from 'jsonwebtoken'

// business logic function for adding contact
export async function createContact(token, contactId, nickname) {
  // using the jwt.verify() function to verify the authenticity and integrity JWT using my secret key.
  const decoded = jwt.verify(token, JWT_SECRET)

  // Extract the user ID from the decoded JWT payload
  const userId = decoded.id;

  // Debugging line to log the user ID to the console
  console.log(`userId is: ${userId}`)

  const newContact = new Contact({
    userId,
    contactId,
    nickname,
  });

  await newContact.save();
  return newContact
}

// business logic function for fetching contact