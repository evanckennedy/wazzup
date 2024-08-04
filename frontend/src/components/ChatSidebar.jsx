import React from 'react'
import ChatList from './ChatList'
import ChatSearchBar from './ChatSearchBar'
import ChatSidebarHeader from './ChatSidebarHeader'

function ChatSidebar({chats}) {
  return (
    <div className='chat-sidebar'>
      <ChatSidebarHeader />
      <ChatSearchBar />
      <ChatList chats={chats}/>
    </div>
  )
}

export default ChatSidebar