import mongoose from "mongoose";

// Contact schema
/**
 * @typedef {Object} ContactSchema
 * @property {mongoose.Schema.Types.ObjectId} userId - The ID of the user who has the contact.
 * @property {mongoose.Schema.Types.ObjectId} contactId - The ID of the contact user.
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