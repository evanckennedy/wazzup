import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

function CreateChatModal({ isOpen, onClose}) {
  const { contacts, createChat } = useAuth()
  const [selectedContacts, setSelectedContacts] = useState([])

  if (!isOpen) return null; 

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await createChat({ participants: selectedContacts })
      onClose();
      setSelectedContacts([])
      console.log('successfully created chat')
    } catch (error) {
      console.error('Error creating chat:', error)
    }
  }

  const handleContactChange = event => {
    const contactId = event.target.value

    // If the box is checked, add the contact Id to the selected contacts. Otherwise, remove it from the selected contacts
    setSelectedContacts(prevSelectedContacts => 
      event.target.checked 
        ? [...prevSelectedContacts, contactId]
        : prevSelectedContacts.filter(id => id !== contactId)
    )
  }

  return (
    <div className='modal-backdrop'>
      <div className='modal'>
        <h2>Create Chat</h2>
        <form onSubmit={handleSubmit}>
          {contacts.map(contact => (
            <div key={contact._id} className='flex gap-20'>
              <input 
                type="checkbox"
                id={`contact-${contact.contactId._id}`}
                value={contact.contactId._id}
                onChange={handleContactChange} 
              />
              <label 
                htmlFor={`contact-${contact.contactId._id}`}
                className='create-modal-text create-contact-modal-text'
              >
                {contact.contactId.username}
              </label>
            </div>
          ))}
          <div className='flex justify-between gap-20 modal-btns-container'>
            <button type='submit' className='modal-btn modal-create-btn'>Create</button>
            <button type='button' className='modal-btn modal-cancel-btn' onClick={onClose}>Cancel</button>
          </div>   
        </form>
      </div>
    </div>
  )
}

export default CreateChatModal