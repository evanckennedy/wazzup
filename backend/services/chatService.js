import Chat from '../models/Chat.js'
import User from '../models/User.js';

export async function createChat(chatData) {
  // get the participants from the chatData
  const { participants } = chatData

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