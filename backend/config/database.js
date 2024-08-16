import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Retrieve the MongoDB URI from the environment variables
const mongoUri = process.env.MONGODB_URI;

// Function to initialize the MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri)
    console.log('Connected to database')
  }
  catch (e) {
    console.error('Failed to connect to database', e)
  }
}

export default connectDB