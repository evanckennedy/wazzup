import React from 'react'
import ContactItem from './ContactItem'

function ContactList({contacts}) {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact.contactId} contact={contact}/>
      ))}
    </ul>
  )
}

export default ContactList