import { createChat, getChats } from "../services/chatService.js";
import { io } from '../server.js';

export async function handleCreateChat(req, res) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const { participants } = req.body;

    const chat = await createChat(token, participants);

    // Emit an event to notify clients about the new chat
    participants.forEach(participant => {
      io.to(participant).emit('chatUpdated');
    });

    res.status(201).json(chat);
  } catch (error) {
    console.error('Error creating chat:', error);
    res.status(500).json({ error: error.message });
  }
}

// Controller to handle getting all chats for a user
export async function handleGetChats(req, res) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const chats = await getChats(token);
    res.status(200).json(chats);
  } catch (error) {
    console.error('Error getting chats:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}