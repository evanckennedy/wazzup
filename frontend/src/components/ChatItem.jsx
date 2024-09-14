import React from 'react'
import { useAuth } from '../contexts/AuthContext'

function ChatItem({chat}) {
  const { user, getChatMessages } = useAuth()

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

  const formatParticipants = participants => {
    // Extract usernames from particpant object and filter out the current user's username
    const usernames = participants
      .map(participant => participant.username) 
      .filter(username => username !== user.username)
    return usernames.join(', ')
  }

  const getMessages = async chatId => {
    try {
      await getChatMessages(chatId);
    } catch (error) {
      console.error('Error getting messages:', error)
    }
  }
  
  return (
    <div className='flex' onClick={() => getMessages(chat._id)}>
      <div className='item-info-container flex flex-column'>
        <div className='name-title-wrapper flex justify-between'>
          <p className='chat-item-name'>{formatParticipants(chat.participants)}</p>
          <p className='chat-item-time'>{formatTime(chat.updatedAt) || 'N/A'}</p>
        </div>
        <div className='flex gap-5'>
          <p className='chat-item-message'>
            { chat.lastMessage &&
            <>
              <span>{chat.lastMessage.sender.username || 'N/A'}</span>:
              <span> {chat.lastMessage.content || 'No messages'}</span>
            </>
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChatItem