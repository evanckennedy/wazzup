import express from 'express'
import { handleCreateContact, handleGetContacts, handleDeleteContact } from '../controllers/contactController.js';

// create router instance
const router = express.Router();

// define a POST route for creating a new contact, handled by the handleCreateContact function
router.post('/contacts', handleCreateContact)

// define a GET route for fetching a users contacts, handled by the handleGetContacts function
router.get('/contacts', handleGetContacts)

// define the DELETE route for deleting a contact
router.delete('/contacts/:contact:Id', handleDeleteContact)

export default router;