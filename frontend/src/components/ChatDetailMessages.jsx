import React, { useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';

function ChatDetailMessages({ chat }) {
  const { getChatMessages, chatMessages, user } = useAuth();
  const messagesEndRef = useRef(null);

  // Call get chat messages whenever the chat changes
  useEffect(() => {
    const fetchMessages = async () => {
      if (chat && chat._id) {
        await getChatMessages(chat._id);
      }
    };

    fetchMessages();
  }, [chat, getChatMessages]);

  // Scroll to the bottom of the messages container
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom whenever chatMessages change
  }, [chatMessages]);

  const formatTime = (time) => {
    // Create a new Date object from the provided time
    const date = new Date(time);

    // Format the date object to a locale time string in 'en-US' format with options to display the hour and minute in 12-hour format
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric', // Display the hour
      minute: 'numeric', // Display the minute
      hour12: true, // Use 12-hour format (AM/PM)
    });
  };

  const getMessageClass = (user, message) => {
    return user.username === message.sender.username ? 'sent-message' : 'received-message';
  };

  return (
    <div className='messages-container flex flex-column gap-10'>
      {chatMessages.map((message) => (
        <div className={`message-container flex ${getMessageClass(user, message)}`} key={message._id}>
          <div className='message-box flex flex-column'>
            <div className='message-header flex'>
              <p>{message.sender.username}</p>
            </div>
            <div className='message-body'>
              <p>{message.content}</p>
            </div>
            <div className='message-footer flex'>
              <p>{formatTime(message.createdAt)}</p>
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatDetailMessages;