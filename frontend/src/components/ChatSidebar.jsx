import React, { useState } from 'react'
import ChatList from './ChatList'
import ChatSidebarHeader from './ChatSidebarHeader'
import ContactList from './ContactList';
import LogoutButton from './LogoutButton';
import { useAuth } from '../contexts/AuthContext';

function ChatSidebar({chats, contacts}) {
  // State to manage the selected tab, either 'chats' or 'contacts'
  const [selectedTab, setSelectedTab] = useState('chats');

  // get user info from AuthContext
  const { user } = useAuth()

  // Function to handle tab click events and update the selected tab
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  }

  const getFirstName = user => {
    const firstName = user.name.split(' ')[0]
    return firstName.charAt(0).toUpperCase() + firstName.slice(1);
  }

  if (!user) {
    return <div>Loading...</div>; // or any loading indicator
  }

  return (
    <div className='chat-sidebar'>
      <div className='sidebar-user-info'>
        <div className="flex justify-between">
          <h2 className='welcome-message'>Hi, {getFirstName(user)}</h2>
          <LogoutButton />
        </div>
        <p>Your ID: {user._id}</p>
      </div>
      <ChatSidebarHeader selectedTab={selectedTab} handleTabClick={handleTabClick}/>
      {selectedTab === 'chats' ? (
        <>
          <button>Create Chat</button>
          <ChatList chats={chats}/>
        </>
      ) : (
        <>
          <button>Create Contact</button>
          <ContactList contacts={contacts} />
        </>
      )}
    </div>
  )
}

export default ChatSidebar