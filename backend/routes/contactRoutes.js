import express from 'express'
import { handleCreateContact } from '../controllers/contactController.js';

// create router instance
const router = express.Router();

// define a POST route for creating a new contact, handled by the handleCreateContact function
router.post('/contacts', handleCreateContact)

export default router;