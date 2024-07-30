import React from 'react'
import ChatWindow from '../components/ChatWindow'
import ChatList from '../components/ChatList'

function Chat() {
  return (
    <div className='chat-container flex'>
      <ChatList />
      <ChatWindow />
    </div>
  )
}

export default Chat