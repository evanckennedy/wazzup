import React, { useState } from 'react'
import ChatList from './ChatList'
import ChatSidebarHeader from './ChatSidebarHeader'
import ContactList from './ContactList';

function ChatSidebar({chats, contacts}) {
  // State to manage the selected tab, either 'chats' or 'contacts'
  const [selectedTab, setSelectedTab] = useState('chats');

  // Function to handle tab click events and update the selected tab
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  }

  return (
    <div className='chat-sidebar'>
      <ChatSidebarHeader selectedTab={selectedTab} handleTabClick={handleTabClick}/>
      {selectedTab === 'chats' ? (
        <ChatList chats={chats}/>
      ) : (
        <ContactList contacts={contacts} />
      )}
    </div>
  )
}

export default ChatSidebar