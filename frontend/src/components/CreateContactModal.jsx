import React, {useState} from 'react'
import { useAuth } from '../contexts/AuthContext'

function CreateContactModal({isOpen, onClose}) {
  const { createContact } = useAuth()
  const [contactId, setContactId] = useState('')

  if (!isOpen) return null

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const trimmedContactId = contactId.trim()
      await createContact({contactId: trimmedContactId})
      onClose();
      setContactId('')
    } catch (error) {
      console.error('Error creating contact:', error)
    } 
  }

  return (
    <div>
      <div>
        <h2>Create Contact</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="contactId">Contact ID:</label>
          <input 
            type="text" 
            id='contactId' 
            placeholder="Enter your contact's id" 
            value={contactId}
            onChange={e => setContactId(e.target.value)}
            />
          <button type='submit'>Create</button>
          <button type='button' onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default CreateContactModal