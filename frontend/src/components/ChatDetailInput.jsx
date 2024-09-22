import React, { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai';
import { useAuth } from '../contexts/AuthContext'

function ChatDetailInput({chat}) {
  const [message, setMessage] = useState('');
  const { sendMessage } = useAuth()

  const handleSendMessage = async () => {
    if (message.trim()) {
      try {
        await sendMessage(chat._id, message)
        setMessage('')
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  }

  return (
    <div className='chat-detail-input-container flex gap-20'>
      <input 
        className='message-input'
        type="text" 
        placeholder='Type a message'
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        maxLength={1000}
      />
      {/* Conditionally render the send icon with different colors */}
      <AiOutlineSend onClick={handleSendMessage} className={`input-icon ${message.trim() ? 'send-icon-enabled' : 'send-icon-disabled' }`} />
    </div>
  )
}

export default ChatDetailInput