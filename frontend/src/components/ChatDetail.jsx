import React from 'react'
import ChatDetailHeader from './ChatDetailHeader'
import ChatDetailMessages from './ChatDetailMessages'
import ChatDetailInput from './ChatDetailInput'

function ChatDetail({chat}) {
  return (
    <div>
      <ChatDetailHeader chat={chat} />
      <ChatDetailMessages chat={chat} />
      <ChatDetailInput chat={chat} />
    </div>
  )
}

export default ChatDetail