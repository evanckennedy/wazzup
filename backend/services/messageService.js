import Message from '../models/Message.js';
import Chat from '../models/Chat.js';
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

export async function sendMessage(chat, token, content) {
  // get ID of the sender 
  const decoded = jwt.verify(token, jwtSecret);
  const sender = decoded.id

  // send new message 
  const newMessage = new Message({
    chat,
    sender,
    content
  })

  // Save the new message to the database
  await newMessage.save();

  // Update the last message and messages array in the chat
  await Chat.findByIdAndUpdate(
    newMessage.chat, 
    {
      $push: { messages: newMessage._id }, 
      lastMessage: newMessage._id, 
      updatedAt: Date.now() 
    }
  )

  return newMessage
};

export async function getMessages(chatId) {
  try {
    // Find the chat document by its ID and populate the messages field
    const chat = await Chat.findById(chatId)
      .populate({
        path: 'messages',
        model: Message,
        populate: {
          path: 'sender',
          model: 'User',
          select: 'username name _id' // Populate username, name, and _id fields
        }
      })

  // validate that chat exists
  if(!chat) {
    throw new Error('Chat not found');
  }

  // return the populated messages array
  return chat.messages;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error; // Ensure the error is rethrown, otherwise the client won't know an error occured
  }
}