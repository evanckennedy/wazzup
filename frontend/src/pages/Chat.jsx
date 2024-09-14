import React, {useState} from 'react'
import ChatSidebar from '../components/ChatSidebar'
import ChatWindow from '../components/ChatWindow'
import { useAuth } from '../contexts/AuthContext'

function Chat() {
  const { chats, contacts } = useAuth()
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className='chat-container flex'>
      <ChatSidebar chats={chats} contacts={contacts} onSelectChat={setSelectedChat}/>
      <ChatWindow selectedChat = {selectedChat}/>
    </div>
  )
}

export default Chat