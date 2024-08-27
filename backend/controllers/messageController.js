import { sendMessage } from "../services/messageService.js";

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

    res.status(201).json(message)
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: error.message })
  }
}