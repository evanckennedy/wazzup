import React from 'react'
import { FaCheck } from 'react-icons/fa';

function ChatItem({chat}) {
  const lastMessage = chat.messages[chat.messages.length - 1];

  return (
    <>
    <div className='flex gap-10'>
      <figure className='chat-item-pfp-wrapper'>
        <img 
          className='chat-item-pfp'
          src={chat.avatar || 'https://via.placeholder.com/128'}
          alt="avatar" 
        />
      </figure>
      <div className='item-info-container flex flex-column'>
        <div className='flex justify-between'>
          <div>{chat.name}</div>
          <p>{lastMessage.time || 'N/A'}</p>
        </div>
        <div className='flex gap-5'>
          <FaCheck />
          <p className='chat-item-message'>
            <span>{lastMessage.sender || 'N/A'}</span>
            :
            <span> {lastMessage.text || 'No messages'}</span>
          </p>
        </div>
      </div>
    </div>
    </>
    

  )
}

export default ChatItem