import React from 'react'
import { FaCheck } from 'react-icons/fa';

function ChatItem({chat}) {
  return (
    <>
    <div className='flex justify-between'>
      <figure>
        <img 
          className='chat-item-pfp'
          src={chat.avatar || 'https://via.placeholder.com/128'}
          alt="avatar" 
        />
      </figure>
      <div className='flex flex-column'>
        <div className='flex justify-between'>
          <div>{chat.name}</div>
          <p>{chat.lastMessageTime || '7:54 PM'}</p>
        </div>
        <div className='flex gap-5'>
          <FaCheck />
          <p>
            <span>{chat.lastMessageSender || 'You'}</span>
            :
            <span>{chat.lastMessage}</span>
          </p>
        </div>
      </div>
    </div>
    </>
    

  )
}

export default ChatItem