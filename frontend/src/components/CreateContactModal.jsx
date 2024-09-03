import React from 'react'

function CreateContactModal({isOpen, onClose}) {
  if (!isOpen) return null

  const handleSubmit = event => {
    event.preventDefault()

    // submission logic

    onClose();
  }

  return (
    <div>
      <div>
        <h2>Create Contact</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="contactId">Contact ID:</label>
          <input type="text" id='contactId' placeholder="Enter your contact's id" />
          <button type='submit'>Create</button>
          <button type='button' onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default CreateContactModal