import React from 'react'

function ContactItem({contact}) {
  return (
    <li>{contact.nickname}</li>
  )
}

export default ContactItem