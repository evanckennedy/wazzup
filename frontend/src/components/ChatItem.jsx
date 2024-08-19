import React from 'react'

function ChatItem({chat}) {
  const lastMessage = chat.messages[chat.messages.length - 1];

  return (
    <div className='flex'>
      <div className='item-info-container flex flex-column'>
        <div className='name-title-wrapper flex justify-between'>
          <p className='chat-item-name'>{chat.name}</p>
          <p className='chat-item-time'>{lastMessage.time || 'N/A'}</p>
        </div>
        <div className='flex gap-5'>
          <p className='chat-item-message'>
            <span>{lastMessage.sender || 'N/A'}</span>
            :
            <span> {lastMessage.text || 'No messages'}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChatItem