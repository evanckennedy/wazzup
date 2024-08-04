import React from 'react'
import ChatItem from './ChatItem'

function ChatList({chats}) {
  return (
    <div className='chat-list-container'>
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </div>
  )
}

export default ChatList