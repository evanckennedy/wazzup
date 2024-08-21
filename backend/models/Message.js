import mongoose from "mongoose";

/**
 * Represents the schema for a message in the database.
 *
 * @typedef {Object} MessageSchema
 * @property {mongoose.Schema.Types.ObjectId} chatId - The ID of the chat associated with the message.
 * @property {mongoose.Schema.Types.ObjectId} senderId - The ID of the user who sent the message.
 * @property {mongoose.Schema.Types.ObjectId} receiverId - The ID of the user who received the message.
 * @property {string} message - The content of the message.
 * @property {Date} timestamp - The timestamp when the message was created.
 * @property {string} status - The status of the message (sent, delivered, read).
 */
const messageSchema = new mongoose.Schema({
  chatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chat',
    required: true,
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  receiverId: { 
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: String,
  timestamp: {
    type: Date,
    default: () => Date.now(),
  },
  status: {
    type: String,
    enum: ['sent', 'delivered', 'read'],
    default: 'sent',
  }
})

// create the message model using the message schema
const Message = mongoose.model('Message', messageSchema)

export default Message