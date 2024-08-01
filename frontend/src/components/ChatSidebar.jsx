import React, { useState } from 'react'
import ChatList from './ChatList'
import ChatSearchBar from './ChatSearchBar'
import ChatSidebarHeader from './ChatSidebarHeader'

function ChatSidebar() {
  const [chats, setChats] = useState([
    { id: 1, name: 'hamburger', lastMessage: 'aha yes', lastMessageTime: '', lastMessageSender: '', avatar: '' },
    { id: 2, name: 'Cameron Kurkjian', lastMessage: 'okay', lastMessageTime: '', lastMessageSender: '', avatar: '' },
    { id: 3, name: 'Jia Jia', lastMessage: 'Yeah sounds good.', lastMessageTime: '', lastMessageSender: '', avatar: '' },
    { id: 4, name: 'Software developers', lastMessage: 'We\'ll discuss this tomorrow.', lastMessageTime: '', lastMessageSender: '', avatar: '' },
    { id: 5, name: 'Andrew Ewen', lastMessage: 'Ok', lastMessageTime: '', lastMessageSender: '', avatar: '' },
    { id: 6, name: 'Gabe', lastMessage: 'I\'ll do some research this evening.', lastMessageTime: '', lastMessageSender: '', avatar: '' },
    { id: 7, name: 'Lynx Web Design', lastMessage: 'One Night Revolution.', lastMessageTime: '', lastMessageSender: '', avatar: '' },
    { id: 8, name: 'Myeongjeon Lee', lastMessage: '', lastMessageTime: '', lastMessageSender: '', avatar: 'avatar8.png' },
    { id: 9, name: 'Monstrosity', lastMessage: 'Myeongjeon Lee: https://www.inst...', lastMessageTime: '', lastMessageSender: '', avatar: '' }
  ]);

  return (
    <div className='chat-sidebar'>
      <ChatSidebarHeader />
      <ChatSearchBar />
      <ChatList chats={chats}/>
    </div>
  )
}

export default ChatSidebar