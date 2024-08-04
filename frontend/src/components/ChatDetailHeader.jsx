import React from 'react';
import { AiOutlineVideoCamera, AiOutlinePhone, AiOutlineSearch } from 'react-icons/ai';

function ChatDetailHeader() {
  return (
    <div className='chat-detail-header-container flex justify-between'>
      <div className='flex gap-10'>
        <img 
          className='chat-item-pfp'
          src="https://via.placeholder.com/128" 
          alt="avatar"/>
        <p>John Doe</p>
      </div>
      <div className='flex gap-10'>
        <AiOutlineVideoCamera />
        <AiOutlinePhone />
        <AiOutlineSearch />
      </div>
    </div>
  );
}

export default ChatDetailHeader;