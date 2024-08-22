import express from 'express'
import { handleCreateContact, handleGetContacts } from '../controllers/contactController.js';

// create router instance
const router = express.Router();

// define a POST route for creating a new contact, handled by the handleCreateContact function
router.post('/contacts', handleCreateContact)

// define a GET route for fetching a users contacts, handled by the handleGetContacts function
router.get('/contacts', handleGetContacts)

export default router;