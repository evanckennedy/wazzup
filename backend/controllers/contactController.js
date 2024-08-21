import { createContact } from "../services/contactService.js";

// async function to Add contact
export async function handleCreateContact (req, res) {
  try {
    const token = req.headers.authoriztion.split(' ')[1] // if the authorization header value is "Bearer abc123xyz", the code will split it into an array ["Bearer", "abc123xyz"], and then assign the token "abc123xyz" to the token variable.
    const { contactId, nickname } = req.body;
    const newContact = await createContact(token, contactId, nickname)

    // include the new contact in the response
    res.status(201).json(newContact)
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ message: 'Internal Server Error '});
  }
}

// async function get contacts.