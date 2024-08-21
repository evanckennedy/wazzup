import mongoose from "mongoose";

// This is the contact schema for the backend application.
/**
 * @typedef {Object} ContactSchema
 * @property {mongoose.Schema.Types.ObjectId} userId - The ID of the user who has the contact.
 * @property {mongoose.Schema.Types.ObjectId} contactId - The ID of the contact user.
 * @property {string} [nickname] - The nickname of the contact.
 * @property {Date} createdAt - The date and time when the contact was created.
 * @property {Date} updatedAt - The date and time when the contact was last updated.
 */
const contactSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  contactId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  nickname: {
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

// Create the Contact model using the contactSchema
const Contact = mongoose.model('Contact', contactSchema);

export default Contact