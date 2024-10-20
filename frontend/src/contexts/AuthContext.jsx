import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { getUserDetails, getUserContacts, getUserChats, createChat as apiCreateChat, createContact as apiCreateContact, deleteContact as apiDeleteContact, getChatMessages as apiGetChatMessages, sendMessage as apiSendMessage } from '../services/api';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem('token'));
  const [user, setUser] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [chats, setChats] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const isUserMessageRef = useRef(false);

  useEffect(() => {
    if (token) {
      const newSocket = io('http://localhost:5000', {
        query: { token }
      });
      setSocket(newSocket);
      console.log('Socket connected:', newSocket);

      return () => newSocket.close();
    }
  }, [token]);

  useEffect(() => {
    if (socket) {
      console.log('Setting up socket listeners');
      socket.on('receiveMessage', (message) => {
        setChatMessages((prevMessages) => [...prevMessages, message]);
      });

      socket.on('chatUpdated', async () => {
        console.log('chatUpdated event received');
        const updatedChats = await getUserChats();
        setChats(updatedChats);
      });

      return () => {
        socket.off('receiveMessage');
        socket.off('chatUpdated');
      };
    }
  }, [socket]);

  const saveToken = newToken => {
    sessionStorage.setItem('token', newToken);
    setToken(newToken);
    window.location.href = '/chat';
  };

  const clearToken = () => {
    sessionStorage.removeItem('token');
    setToken('');
  };

  const logout = () => {
    clearToken();
    setUser(null);
    setContacts([]);
    setChats(null);
    window.location.href = '/';
  };

  const fetchUserData = async () => {
    try {
      const userDetails = await getUserDetails();
      const userContacts = await getUserContacts();
      const userChats = await getUserChats();
      setUser(userDetails);
      setContacts(userContacts);
      setChats(userChats);
    } catch (error) {
      console.log('Error fetching user details', error);
      logout();
    }
  };

  const createContact = async contact => {
    try {
      await apiCreateContact(contact);
      const updatedContacts = await getUserContacts();
      setContacts(updatedContacts);
    } catch (error) {
      console.error('Error creating contact:', error);
      throw error;
    }
  };

  const deleteContact = async contactId => {
    try {
      await apiDeleteContact(contactId);
      const updatedContacts = await getUserContacts();
      setContacts(updatedContacts);
    } catch (error) {
      console.error('Error creating chat:', error);
      throw error;
    }
  };

  const createChat = async participants => {
    try {
      await apiCreateChat(participants);
      const updatedChats = await getUserChats();
      setChats(updatedChats);
    } catch (error) {
      console.error('Error creating chat:', error);
      throw error;
    }
  };

  const getChatMessages = async chatId => {
    try {
      const chatMessages = await apiGetChatMessages(chatId);
      setChatMessages(chatMessages);
    } catch (error) {
      console.error('Error getting chat messages:', error);
      throw error;
    }
  };

  const sendMessage = async (chatId, content) => {
    try {
      const newMessage = await apiSendMessage(chatId, content);
      const populatedMessage = {
        ...newMessage,
        sender: {
          _id: user._id,
          username: user.username,
          name: user.name,
        },
      };
      setChatMessages((prevMessages) => [...prevMessages, populatedMessage]);
      socket.emit('sendMessage', populatedMessage); // Emit the message to the server
      isUserMessageRef.current = true; // Set the flag when the user sends a message
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserData();
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, saveToken, clearToken, logout, contacts, user, chats, chatMessages, createContact, createChat, deleteContact, getChatMessages, sendMessage }}>
      {children}
    </AuthContext.Provider>
  );
};