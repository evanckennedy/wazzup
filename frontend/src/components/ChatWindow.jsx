import React from 'react'
import DefaultChatView from './DefaultChatView'
import ChatDetail from './ChatDetail'

function ChatWindow() {
  return (
    <div className='chat-window'>
      <DefaultChatView />
      {/* render ChatDetail component if the user selects a chat, and pass the 
      selected chat's details as a prop down to the ChatDetailMessages component*/}
    </div>
  )
}

export default ChatWindow