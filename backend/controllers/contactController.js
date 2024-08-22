import { createContact, getContacts } from "../services/contactService.js";
import dotenv from "dotenv";

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

    // console.log for testing
    console.log(decoded)

    // Extract the user ID from the decoded token
    const userId = decoded.userId

    // Call the getContacts function to retrieve the user's contacts, passing the user ID as an argument
    const contacts = await getContacts(userId)

    // Return a successful response (200) with the contacts in JSON format
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error getting contacts:', error)
    res.status(500).json({ message: 'Internal Server Error '})
  }
}