import React from 'react'
import { AiOutlineSmile, AiOutlineFile, AiOutlineAudio, AiOutlineSend } from 'react-icons/ai';

function ChatDetailInput() {
  return (
    <div className='chat-detail-input-container flex'>
      <AiOutlineSmile />
      <AiOutlineFile />
      <input type="text" />
      <AiOutlineAudio />
      {/* <AiOutlineSend /> */}
    </div>
  )
}

export default ChatDetailInput