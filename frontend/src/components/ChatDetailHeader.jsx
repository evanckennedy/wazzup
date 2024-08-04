import React from 'react'
import { FaVideo, FaPhone, FaSearch } from 'react-icons/fa';

function ChatDetailHeader() {
  return (
    <div className='chat-detail-header-container flex justify-between'>
      <div className='flex gap-5'>
        <img src="https://via.placeholder.com/128" alt="avatar" />
        <p>John Doe</p>
      </div>
      <div className='flex gap-5'>
        <FaVideo />
        <FaPhone />
        <FaSearch />
      </div>
    </div>
  )
}

export default ChatDetailHeader