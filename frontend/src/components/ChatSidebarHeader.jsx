import React from 'react'

function ChatSidebarHeader({selectedTab, handleTabClick}) {
  return (
    <div className='sidebar-header-container flex justify-between'>
      <button
        className={selectedTab === 'chats' ? 'active' : ''}
        onClick={() => handleTabClick('chats')}
      >
        Chats
      </button>
      <button
        className={selectedTab === 'contacts' ? 'active' : ''}
        onClick={() => handleTabClick('contacts')}
      >
        Contacts
      </button>
    </div>
  )
}

export default ChatSidebarHeader