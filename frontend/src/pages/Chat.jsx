import React from 'react'
import ChatSidebar from '../components/ChatSidebar'
import ChatWindow from '../components/ChatWindow'

function Chat() {
  return (
    <div className='chat-container flex'>
      <ChatSidebar />
      <ChatWindow />
    </div>
  )
}

export default Chat