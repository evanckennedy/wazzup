// import service functions
import { createChat, getChats } from "../services/chatService.js"

export async function handleCreateChat(req, res) {
  try {
    // Extract the token from the Authorization header
    const token = req.headers.authorization.split(' ')[1];

    // get the participants (other than the user who created the chat)
    const otherParticipants = req.body.participants;

    // await createChat service function to execute
    const chat = await createChat(token, otherParticipants);

    // send a 201 created response; include chat in the response
    res.status(201).json(chat);
  } catch (error) {
    console.error('Error creating chat:', error);
    res.status(500).json({ message: 'Internal Server Error '});
  }
}

// Controller to handle getting all chats for a user
export async function handleGetChats(req, res) {
  try {
    // Check if authorization header is present
    if (!req.headers.authorization) {
      return res.status(400).json({ error: 'Authorization header is required' });
    }

    // Split the authorization header to get the token
    const tokenParts = req.headers.authorization.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(400).json({ error: 'Invalid authorization format' });
    }

    const token = tokenParts[1];

    // Fetch chats using the token
    const chats = await getChats(token);
    res.status(200).json(chats);
  } catch (error) {
    console.error('Error getting chats:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}