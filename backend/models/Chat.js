import mongoose from "mongoose";

/**
 * Schema for a chat
 *
 * @typedef {Object} ChatSchema
 * @property {Array.<mongoose.Schema.Types.ObjectId>} participants - The participants of the chat.
 * @property {mongoose.Schema.Types.ObjectId} lastMessage - The last message in the chat.
 * @property {Date} createdAt - The date and time when the chat was created.
 * @property {Date} updatedAt - The date and time when the chat was last updated.
 */
const chatSchema = new mongoose.Schema({
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  lastMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
})

// create the chat model using the chatSchema
const Chat = mongoose.model('Chat', chatSchema);

export default Chat