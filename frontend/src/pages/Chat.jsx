import React from 'react'
import ChatSidebar from '../components/ChatSidebar'

function Chat() {
  return (
    <div className='chat-container flex'>
      <ChatList />
      <ChatSidebar />
    </div>
  )
}

export default Chat