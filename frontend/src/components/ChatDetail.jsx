import React from 'react'
import ChatDetailHeader from './ChatDetailHeader'
import ChatDetailMessages from './ChatDetailMessages'
import ChatDetailInput from './ChatDetailInput'

function ChatDetail() {
  return (
    <div>
      <ChatDetailHeader />
      <ChatDetailMessages />
      <ChatDetailInput />
    </div>
  )
}

export default ChatDetail