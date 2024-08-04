import React from 'react'
import DefaultChatView from './DefaultChatView'
import ChatDetail from './ChatDetail'

function ChatWindow() {
     /* 
     To do: 
      - render ChatDetail component if the user selects a chat, and pass the 
        selected chat's details as a prop down to the ChatDetailMessages component
        and the ChatDetailHeader component to display the correct name and avatar 
      */
  return (
    <div className='chat-window'>
      <DefaultChatView />
    </div>
  )
}

export default ChatWindow