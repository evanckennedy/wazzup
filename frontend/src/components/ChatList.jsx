import React from 'react'
import ChatItem from './ChatItem'

function ChatList({chats, onSelectChat }) {
  return (
    <div className='chat-list-container'>
      {chats.map((chat) => (
        <ChatItem key={chat._id} chat={chat} onSelectChat={onSelectChat} />
      ))}
    </div>
  )
}

export default ChatList