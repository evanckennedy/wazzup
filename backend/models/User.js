import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contacts: [{ 
    type: mongoose.Schema.Types.ObjectId, ref: 'Contact' 
  }],
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