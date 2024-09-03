import React, { useState } from 'react'
import ChatList from './ChatList'
import ChatSidebarHeader from './ChatSidebarHeader'
import ContactList from './ContactList';
import LogoutButton from './LogoutButton';
import { useAuth } from '../contexts/AuthContext';
import CreateChatModal from './CreateChatModal';
import CreateContactModal from './CreateContactModal';

function ChatSidebar({chats, contacts}) {
  // State to manage the selected tab, either 'chats' or 'contacts'
  const [selectedTab, setSelectedTab] = useState('chats');

  const [isChatModalOpen, setIsChatModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

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
          <button onClick={() => setIsChatModalOpen(true)}>Create Chat</button>
          <ChatList chats={chats}/>
          <CreateChatModal isOpen={isChatModalOpen} onClose={() => setIsChatModalOpen(false)}/>
        </>
      ) : (
        <>
          <button onClick={() => setIsContactModalOpen(true)}>Create Contact</button>
          <ContactList contacts={contacts} />
          <CreateContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)}/>
        </>
      )}
    </div>
  )
}

export default ChatSidebar