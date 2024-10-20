import { sendMessage, getMessages } from "../services/messageService.js";
import { io } from '../server.js';

export async function handleSendMessage(req, res) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const { chat, content } = req.body;

    if (!chat || !content) {
      return res.status(400).json({ error: 'Chat ID and content are required.' });
    }

    const message = await sendMessage(chat, token, content);

    // Emit the message to the chat room
    io.to(chat).emit('receiveMessage', message);

    // Emit an event to update chats
    io.emit('chatUpdated');

    res.status(201).json(message);
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: error.message });
  }
}

export async function handleGetMessages(req, res) {
  try {
    const { chatId } = req.params;

    if (!chatId) {
      return res.status(400).json({ error: 'Chat ID is required' });
    }

    const messages = await getMessages(chatId);
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error fetching messages: ', error);
    res.status(500).json({ error: error.message });
  }
}