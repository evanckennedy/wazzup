import React from 'react'
import DefaultChatView from './DefaultChatView'
import ChatDetail from './ChatDetail'

function ChatWindow() {
  return (
    <div className='chat-window'>
      <ChatDetail />
      {/* <DefaultChatView /> */}
    </div>
  )
}

export default ChatWindow