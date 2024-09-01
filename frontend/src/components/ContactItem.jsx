import React from 'react'

function ContactItem({contact}) {
  return (
    <li>{contact.contactId.name} ({contact.contactId.username})</li>
  )
}

export default ContactItem