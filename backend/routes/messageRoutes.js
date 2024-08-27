import express from 'express'
import { handleSendMessage, handleGetMessages } from '../controllers/messageController.js';

const router = express.Router()

// define a post route for sending a message
router.post('/messages', handleSendMessage) 

// define a get route for fetching messages
router.get('/messages/:chatId', handleGetMessages)

export default router;