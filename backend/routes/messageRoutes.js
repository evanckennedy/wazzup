import express from 'express'
import { handleSendMessage } from '../controllers/messageController.js';

const router = express.Router()

// define a post route for sending a message
router.post('/messages', handleSendMessage) 

export default router;