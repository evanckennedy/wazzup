import React from 'react'
import { useAuth } from '../contexts/AuthContext'

function ChatItem({chat}) {
  const { user } = useAuth()

  const formatTime = time => {
    const date = new Date(time)
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
  }

  const formatParticipants = participants => {
    // Extract usernames from particpant object and filter out the current user's username
    const usernames = participants
      .map(participant => participant.username) 
      .filter(username => username !== user.username)
    return usernames.join(', ')
  }

  console.log('chat partcipants: ', formatParticipants(chat.participants))

  /* formatParticipants(chat.participants.username) */
  
  return (
    <div className='flex'>
      <div className='item-info-container flex flex-column'>
        <div className='name-title-wrapper flex justify-between'>
          <p className='chat-item-name'>{formatParticipants(chat.participants)}</p>
          <p className='chat-item-time'>{formatTime(chat.updatedAt) || 'N/A'}</p>
        </div>
        <div className='flex gap-5'>
          <p className='chat-item-message'>
            <span>{chat.lastMessage.sender || 'N/A'}</span>
            :
            <span> {chat.lastMessage.content || 'No messages'}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChatItem