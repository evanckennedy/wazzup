import React from 'react'
import ChatSidebar from '../components/ChatSidebar'
import ChatWindow from '../components/ChatWindow'
import chats from '../mock-data/chats'

function Chat() {
  return (
    <div className='chat-container flex'>
      <ChatSidebar chats={chats} />
      <ChatWindow />
    </div>
  )
}

export default Chat