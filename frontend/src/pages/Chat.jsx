import React from 'react'
import ChatSidebar from '../components/ChatSidebar'
import ChatWindow from '../components/ChatWindow'
/* import chats from '../mock-data/chats' */
/* import contacts from '../mock-data/contacts' */
import { useAuth } from '../contexts/AuthContext'

function Chat() {
  /* const { contacts } = useAuth() */
  const { chats, contacts } = useAuth()

  return (
    <div className='chat-container flex'>
      <ChatSidebar chats={chats} contacts={contacts}/>
      <ChatWindow />
    </div>
  )
}

export default Chat