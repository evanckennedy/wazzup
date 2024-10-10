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
    <div className='modal-backdrop'>
      <div className='modal'>
        <h2>Create Contact</h2>
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="contactId">Contact ID:</label> */}
          <input 
            className='create-modal-input'
            type="text" 
            id='contactId' 
            placeholder="Enter your contact's id" 
            value={contactId}
            onChange={e => setContactId(e.target.value)}
          />
          <div className='flex justify-between gap-20 modal-btns-container'>
            <button type='submit' className='modal-btn modal-create-btn'>Create</button>
            <button type='button' className='modal-btn modal-cancel-btn' onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateContactModal