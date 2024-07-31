import React from 'react'
import ChatList from './ChatList'
import ChatSearchBar from './ChatSearchBar'
import ChatSidebarHeader from './ChatSidebarHeader'

function ChatSidebar() {
  return (
    <div className='chat-sidebar'>
      <ChatSidebarHeader />
      <ChatSearchBar />
      <ChatList />
    </div>
  )
}

export default ChatSidebar