import React from 'react'
import { getUserContacts } from '../services/api';

function CreateChatModal({ isOpen, onClose}) {
  if (!isOpen) return null; 

  const handleSubmit = event => {
    event.preventDefault();
    
    // submission logic

    onClose();
  }

  return (
    <div>
      <div>
        <h2>Create Chat</h2>
        <form onSubmit={handleSubmit}>
          
          <button type='submit'>Create</button>
          <button type='button' onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default CreateChatModal