import express from 'express'
import { handleCreateChat, handleGetChats } from '../controllers/chatController.js'

const router = express.Router()

// define a POST route for creating a new chat
router.post('/chats', handleCreateChat)

// define a GET route for finding a user's chats
router.get('/chats', handleGetChats)

export default router