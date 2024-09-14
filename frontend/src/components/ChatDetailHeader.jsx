import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext'

function ChatDetailHeader({chat}) {
  const { user } = useAuth()

  const formatParticipants = participants => {
    if (!user) return '';

    // Extract usernames from particpant object and filter out the current user's username
    const usernames = participants
      .map(participant => participant.username) 
      .filter(username => username !== user.username)
    return usernames.join(', ')
  }

  // debugging. remove later
  useEffect(() => {
    console.log("chat stuff:", chat)
  }, [chat])

  return (
    <div className='chat-detail-header-container flex justify-between'>
      <p>{formatParticipants(chat.participants)}</p>
    </div>
  );
}

export default ChatDetailHeader;