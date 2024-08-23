// import service functions
import { createChat } from "../services/chatService.js"

export async function handleCreateChat(req, res) {
  try {
    // await createChat service function to execute, passing the req.body as an argument
    // data submitted by client includes the participants in the request body
    const chat = await createChat(req.body)

    // send a 201 created response; include chat in the response
    res.status(201).json(chat);
  } catch (error) {
    console.error('Error creating chat:', error);
    res.status(500).json({ message: 'Internal Server Error '});
  }
}