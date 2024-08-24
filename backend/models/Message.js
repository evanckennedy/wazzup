import mongoose from "mongoose";

/**
 * Represents the schema for a message in the database.
 *
 * @typedef {Object} MessageSchema
 * @property {mongoose.Schema.Types.ObjectId} chat - The ID of the chat associated with the message.
 * @property {mongoose.Schema.Types.ObjectId} sender - The ID of the user who sent the message.
 * @property {string} content - The content of the message.
 * @property {Date} createdAt - The timestamp when the message was created.
 * @property {Date} updatedAt - The timestamp when the message was updated.
 */
const messageSchema = new mongoose.Schema({
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chat',
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String, 
    required: true,
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

// create the message model using the message schema
const Message = mongoose.model('Message', messageSchema)

export default Message