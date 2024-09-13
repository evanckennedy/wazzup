import React, { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai';

function ChatDetailInput() {
  const [message, setMessage] = useState('');

  return (
    <div className='chat-detail-input-container flex gap-20'>
      <input 
        className='message-input'
        type="text" 
        placeholder='Type a message'
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      {/* Conditionally render the send icon with different colors */}
      <AiOutlineSend className={`input-icon ${message ? 'send-icon-enabled' : 'send-icon-disabled' }`} />
    </div>
  )
}

export default ChatDetailInput