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

  // Update the last message in the chat
  await Chat.findByIdAndUpdate(newMessage.chat, { lastmessage: newMessage._id })

  return newMessage
};