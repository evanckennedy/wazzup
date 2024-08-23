import express from 'express'
import { handleCreateChat } from '../controllers/chatController.js'

const router = express.Router()

// define a POST route for creating a new chat
router.post('/chats', handleCreateChat)

export default router