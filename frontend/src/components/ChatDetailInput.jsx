import React, { useState } from 'react'
import { AiOutlineSend, AiFillSend } from 'react-icons/ai';

function ChatDetailInput() {
  const [message, setMessage] = useState('');

  return (
    <div className='chat-detail-input-container flex justify-between'>
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