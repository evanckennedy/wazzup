import { createContact, deleteContact, getContacts } from "../services/contactService.js";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken'
import User from "../models/User.js";

// Load environment variables from .env file
dotenv.config();

const jwtSecret = process.env.JWT_SECRET

// async function to Add contact
export async function handleCreateContact (req, res) {
  try {
    const token = req.headers.authorization.split(' ')[1] // if the authorization header value is "Bearer abc123xyz", the code will split it into an array ["Bearer", "abc123xyz"], and then assign the token "abc123xyz" to the token variable.
    const { contactId, nickname } = req.body;
    const newContact = await createContact(token, contactId, nickname)

    // include the new contact in the response
    res.status(201).json(newContact)
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ message: 'Internal Server Error '});
  }
}

// asynchronous function to handle GET requests for contacts
export async function handleGetContacts(req, res) {
  try {
    // Extract the token from the Authorization header, splitting the string into an array and taking the second element ([1])
    const token = req.headers.authorization.split(' ')[1]

    // Verify the token using the jwtSecret, and decode its contents
    const decoded = jwt.verify(token, jwtSecret)

    // Extract the user ID from the decoded token
    const userId = decoded.id

    // Call the getContacts function to retrieve the user's contacts, passing the user ID as an argument
    const contacts = await getContacts(userId)

    // Return a successful response (200) with the contacts in JSON format
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error getting contacts:', error)
    if (error.message === 'User not found') {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(500).json({ message: 'Internal Server Error '})
  }
}

// handle DELETE requests for a user's contact
export async function handleDeleteContact(req, res) {
  try {
    // get the token from the authorization header
    const token = req.headers.authorization.split(' ')[1];

    // verify token and get the contents
    const decoded = jwt.verify(token, jwtSecret)

    // get user ID from the decoded token
    const userId = decoded.id;

    // get the contact ID from the URL parameter
    const contactId = req.params.contactId

    console.log('user id:', userId)
    console.log('contact id:',contactId)

    // call the service function to delete the contact
    await deleteContact(userId, contactId);

    // return a succesful response with a message.
    res.status(200).json({ message: 'Contact deleted successfully' }) 
  } catch (error) {
    console.error('Error deleting contact:', error)
    if (error.message === 'User not found') {
      return res.status(404).json({ message: 'User not found' })
    }
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

/* decoded returns:
{ id: '66c4ed66eb2aa804a6abf2ab', iat: 1724273313, exp: 1724878113 } */