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
    <div>
      <div>
        <h2>Create Chat</h2>
        <form onSubmit={handleSubmit}>
          {contacts.map(contact => (
            <div key={contact._id}>
              <input 
                type="checkbox"
                value={contact.contactId._id}
                onChange={handleContactChange} 
              />
              {contact.contactId.username}
            </div>
          ))}
          <button type='submit'>Create</button>
          <button type='button' onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default CreateChatModal