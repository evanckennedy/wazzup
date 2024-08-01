import React from 'react'
import ChatItem from './ChatItem'

function ChatList({chats}) {
  return (
    <div>
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </div>
    /* overflow-y: auto for this section */
  )
}

export default ChatList