import connectDB from "./config/database.js";
import express from 'express';
import userRoutes from './routes/userRoutes.js'
import contactRoutes from './routes/contactRoutes.js'
import chatRoutes from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoutes.js"

// Create an instance of an Express application
const app = express();
// Set the port number to the value from the environment variable PORT, or default to 5000 if not set
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the routes under the /api path
app.use('/api', userRoutes); 
app.use('/api', contactRoutes) 
app.use('/api', chatRoutes) 
app.use('/api', messageRoutes)

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});