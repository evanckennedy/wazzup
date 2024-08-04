import React from 'react'
import { FaPlus, FaFilter } from 'react-icons/fa';

function ChatSidebarHeader() {
  return (
    <div className='sidebar-header-container flex justify-between'>
      <h3>Chats</h3>
      <div className='flex gap-5'>
        <FaPlus />
        <FaFilter />
      </div>
    </div>
  )
}

export default ChatSidebarHeader