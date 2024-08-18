import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  password: String,
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
  profilePicture: String,
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now,
  },
})