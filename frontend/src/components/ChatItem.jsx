import React from 'react'
import { FaCheck } from 'react-icons/fa';

function ChatItem() {
  return (
    <>
    <div className='flex justify-between'>
      <figure>
        <img 
          className='chat-item-pfp'
          src="https://via.placeholder.com/128" 
          alt="" 
        />
      </figure>
      
      <div className='flex flex-column'>
        <div className='flex justify-between'>
          <div>Cameron</div>
          <p>7:54 PM</p>
        </div>
        <div className='flex gap-5'>
          <FaCheck />
          <p>Evan: Okay, sounds good</p>
        </div>
      </div>
    </div>
    </>
    

  )
}

export default ChatItem