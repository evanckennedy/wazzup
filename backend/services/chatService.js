import Chat from '../models/Chat.js'
import User from '../models/User.js';
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const jwtSecret = process.env.JWT_SECRET

export async function createChat(token, otherParticipants) {
  // Decode the token to get the user ID
  const decoded = jwt.verify(token, jwtSecret);
  const userId = decoded.id;

  // combine all partipants and store in an array
  const participants = [...otherParticipants, userId]

  //create new chat document
  const newChat = new Chat({
    participants, // shorthand syntax, equivalent to participants: participants
    messages: [],
    lastMessage: null
  })

  // save chat to the database
  await newChat.save();

  // add the chat to each participant's chats field
  // Update multiple User documents in the database
  await User.updateMany(
    // Find users whose _id is in the participants array
    { _id: { $in: participants } },
    // Update the chats field by adding the new chat's ID to the array
    { $push: { chats: newChat._id } }
  );

  return newChat;
}

export async function getChats(userId) {
  // find all the chats the user partakes in
  // populate the Chat with all the participants name and last message im not sure if it does that implicitly or not
}