import React, { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'

function ChatDetailMessages({chat}) {
  const {getChatMessages, chatMessages, user} = useAuth()

  // call get chat messages whenever the chat changes
  useEffect(() => {
    const fetchMessages = async () => {
      if (chat && chat._id) {
        getChatMessages(chat._id)
      }
    }
    
    fetchMessages();
  }, [chat])

  const formatTime = time => {
    // Create a new Date object from the provided time
    const date = new Date(time)

    // Format the date object to a locale time string in 'en-US' format with options to display the hour and minute in 12-hour format
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric', // Display the hour
      minute: 'numeric', // Display the minute
      hour12: true, // Use 12-hour format (AM/PM)
    })
  }

  const getMessageClass = (user, message) => {
    return user.username === message.sender.username ? 'sent-message' : 'received-message'
  }

  /* 
    if user.username equals message.sender.username, then apply the sent-message className to the message-container div. Otherwise, apply received-message className to the message-container div
  */

  return (
    <div className='messages-container flex flex-column gap-10'>
      {chatMessages.map((message) => (
      <div className={`message-container flex ${getMessageClass(user, message)}`} key={message._id}>
          <div className='message-box flex flex-column'>
            <div className="message-header flex">
              <p>{message.sender.username}</p>
            </div>
            <div className="message-body">
              <p>{message.content}</p>
            </div>
            <div className="message-footer flex">
              <p>{formatTime(message.createdAt)}</p>
            </div>  
          </div>
        </div>
      ))}
    </div>
  )
}



export default ChatDetailMessages