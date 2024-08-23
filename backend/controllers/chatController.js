// import service functions
import { createChat } from "../services/chatService.js"

export async function handleCreateChat(req, res) {
  try {
    // Extract the token from the Authorization header
    const token = req.headers.authorization.split(' ')[1];

    // get the participants (other than the user who created the chat)
    const otherParticipants = req.body

    // await createChat service function to execute
    const chat = await createChat(token, otherParticipants)

    // send a 201 created response; include chat in the response
    res.status(201).json(chat);
  } catch (error) {
    console.error('Error creating chat:', error);
    res.status(500).json({ message: 'Internal Server Error '});
  }
}