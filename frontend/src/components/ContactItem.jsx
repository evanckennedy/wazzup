import React from 'react'
import { FiTrash } from 'react-icons/fi';

function ContactItem({contact}) {
  return (

    <li className='flex justify-between item-info-container'>
      <p className='contact-username'>{contact.contactId.username}</p>
      <button className='delete-contact-btn'>
        <FiTrash />
      </button>
    </li>
  )
}

export default ContactItem