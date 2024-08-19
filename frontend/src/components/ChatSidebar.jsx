import React from 'react'
import ChatList from './ChatList'
import ChatSidebarHeader from './ChatSidebarHeader'

function ChatSidebar({chats}) {
  return (
    <div className='chat-sidebar'>
      <ChatSidebarHeader />
      <ChatList chats={chats}/>
    </div>
  )
}

export default ChatSidebar