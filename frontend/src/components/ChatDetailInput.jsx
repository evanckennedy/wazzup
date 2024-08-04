import React, { useState } from 'react'
import { AiOutlineSmile, AiOutlineAudio, AiOutlineSend, AiOutlinePaperClip } from 'react-icons/ai';

function ChatDetailInput() {
  const [message, setMessage] = useState('');

  return (
    <div className='chat-detail-input-container flex justify-between'>
      <AiOutlineSmile className='input-icon'/>
      <AiOutlinePaperClip className='input-icon'/>
      <input 
        className='message-input'
        type="text" 
        placeholder='Type a message'
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <AiOutlineAudio className='input-icon'/>
      {/* <AiOutlineSend /> */}
    </div>
  )
}

export default ChatDetailInput