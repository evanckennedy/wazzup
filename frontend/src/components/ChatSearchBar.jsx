import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';

function ChatSearchBar() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className='chat-search-bar-container'>
      <FaSearch className='search-icon'/>
      <input 
        className='chat-search-input'
        type="text"
        value={searchText} 
        onChange={e => setSearchText(e.target.value)}
        placeholder='Search'
      />
    </div>
    
  )
}

export default ChatSearchBar