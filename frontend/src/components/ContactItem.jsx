import React from 'react'
import { FiTrash } from 'react-icons/fi';
import { useAuth } from '../contexts/AuthContext';

function ContactItem({contact}) {
  const { deleteContact } = useAuth();
  
  const handleDelete = async () => {
    try {
      await deleteContact(contact._id)
    } catch (error) {
      console.error('Error deleting contact:', error)
    }
  }

  return (
    <li className='flex justify-between item-info-container'>
      <p className='contact-username'>{contact.contactId.username}</p>
      <button className='delete-contact-btn' onClick={handleDelete}>
        <FiTrash />
      </button>
    </li>
  )
}

export default ContactItem