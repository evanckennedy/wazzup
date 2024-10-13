import { sendMessage, getMessages } from "../services/messageService.js";
import { io } from '../server.js';

export async function handleSendMessage(req, res) {
  try {
    // get token from the header
    const token = req.headers.authorization.split(' ')[1];

    // get chatId and content from the body
    const { chat, content } = req.body;

    // Validate the request body
    if (!chat || !content) {
      // send invalid request error
      return res.status(400).json({ error: 'Chat ID and content are required.' });
    }

    const message = await sendMessage(chat, token, content)

    // Emit the message to the chat room
    io.to(chat).emit('receiveMessage', message);

    res.status(201).json(message)
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: error.message })
  }
}

export async function handleGetMessages(req, res) {
  try {
    // Get chatId from the route parameters
    const { chatId } = req.params

    // validate the request parameter 
    if (!chatId) {
      return res.status(400).json({ error: 'Chat ID is required' })
    }

    // Fetch messages using the service function
    const messages = await getMessages(chatId)

    // respond with fetched messages
    res.status(200).json(messages)
  } catch (error) {
    console.error('Error fetching messages: ', error)
    res.status(500).json({ error: error.message })
  }
}