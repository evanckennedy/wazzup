import React from 'react'
import ContactItem from './ContactItem'

function ContactList({contacts}) {
  console.log('Contacts:::', contacts);
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact._id} contact={contact}/>
      ))}
    </ul>
  )
}

export default ContactList