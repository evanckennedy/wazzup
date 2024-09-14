import React, { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'

function ChatDetailMessages({chat}) {
  const {getChatMessages, chatMessages} = useAuth()

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

  /* 
    To Do: 
      - When the user clicks on a chat from the sidebar, the messages should display.
        Map out each chat.
      - This component should take up the vast majority (roughly 80 percent) of the 
        vertical spacing of the chat window.
      - Add "overflow-y: auto;" to the parent div of this component, allowing
        users to scroll through the message history
  */ 
  return (
    <div>
      {chatMessages.map((message) => (
        <div key={message._id}>
          <p>{message.sender}</p>
          <p>{message.content}</p>
          <p>{formatTime(message.createdAt)}</p>
        </div>
      ))}
    </div>
  )
}



export default ChatDetailMessages