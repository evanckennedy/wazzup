# WazzUp

WazzUp is a WhatsApp-inspired messaging app created with MongoDB, Mongoose, Express, React, Node.js, and Socket.IO. It allows users to sign up or log in, add new contacts, create chats, and message people in real-time.

## Demo

Check out the [video demo](https://www.youtube.com/watch?v=PdVw9rkd6Qw) to see WazzUp in action!

## Features

- **Real-Time Chatting**: Powered by Socket.IO for instant communication.
- **User Authentication**: Sign up and log in securely using JSON Web Tokens (JWT).
- **Contact Management**: Add and manage contacts.
- **Chat Creation**: Create new chats with selected contacts.
- **Messaging**: Send and receive messages in real-time.
- **RESTful APIs**: Manage user authentication, contacts, chats, and messages.

## Tech Stack

- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Real-Time Communication**: Socket.IO
- **Authentication**: JSON Web Tokens (JWT)

## Installation

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/evanckennedy/wazzup.git
   cd wazzup/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following environment variables:
   ```env
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```bash
   npm run devStart
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
2. Sign up or log in to your account.
3. Add new contacts and create chats.
4. Start messaging in real-time!

## Planned Enhancements

### Features to Implement

- Display error messages in the UI if the username or password is invalid.
- Prevent auto-scrolling to the bottom of the chat when a new message is received if the user is not already at the bottom of the chat.
- Improve responsiveness to ensure the application looks and functions well on mobile devices.
- Ensure that the most recently added or updated chat appears at the top of the chat list.

### Known Issues

- Users are currently unable to scroll up to view older messages. The application automatically scrolls to the bottom of the chat whenever a user attempts to scroll up.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.