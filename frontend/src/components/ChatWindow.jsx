import React, { useEffect } from 'react';
import DefaultChatView from './DefaultChatView';
import ChatDetail from './ChatDetail';
import { useAuth } from '../contexts/AuthContext';

function ChatWindow({ selectedChat }) {
  const { socket } = useAuth();

  useEffect(() => {
    if (selectedChat && socket) {
      socket.emit('joinChat', selectedChat._id);
    }
  }, [selectedChat, socket]);

  return (
    <div className='chat-window'>
      {selectedChat ? (
        <ChatDetail chat={selectedChat} />
      ) : (
        <DefaultChatView />
      )}
    </div>
  );
}

export default ChatWindow;