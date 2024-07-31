import React from 'react'
import { FaPlus, FaFilter } from 'react-icons/fa';

function ChatSidebarHeader() {
  return (
    <div className='flex justify-between'>
      <h3>Chats</h3>
      <div className='flex gap-10'>
        <FaPlus />
        <FaFilter />
      </div>
    </div>
  )
}

export default ChatSidebarHeader