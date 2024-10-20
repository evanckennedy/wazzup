import React, { useState } from 'react'
import ChatList from './ChatList'
import ChatSidebarHeader from './ChatSidebarHeader'
import ContactList from './ContactList';
import LogoutButton from './LogoutButton';
import { useAuth } from '../contexts/AuthContext';
import CreateChatModal from './CreateChatModal';
import CreateContactModal from './CreateContactModal';

function ChatSidebar({chats, contacts, onSelectChat }) {
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
    return <div className='chat-sidebar'></div>; // Return an empty div with the same class
  }

  return (
    <div className='chat-sidebar'>
      <div className='sidebar-user-info'>
        <div className="flex justify-between">
          <h2 className='welcome-message'>Hi, {getFirstName(user)}</h2>
          <LogoutButton />
        </div>
        <p className='your-id'>
          <span>Your ID: </span>
          <span>{user._id}</span>
        </p>
      </div>
      <ChatSidebarHeader selectedTab={selectedTab} handleTabClick={handleTabClick}/>
      {selectedTab === 'chats' ? (
        <>   
          <ChatList chats={chats} onSelectChat={onSelectChat}/>
          <button onClick={() => setIsChatModalOpen(true)} className='sidebar-create-btn'>Create Chat</button>
          <CreateChatModal isOpen={isChatModalOpen} onClose={() => setIsChatModalOpen(false)}/>
        </>
      ) : (
        <>
          <ContactList contacts={contacts} />
          <button onClick={() => setIsContactModalOpen(true)} className='sidebar-create-btn'>Create Contact</button>
          <CreateContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)}/>
        </>
      )}
    </div>
  )
}

export default ChatSidebar