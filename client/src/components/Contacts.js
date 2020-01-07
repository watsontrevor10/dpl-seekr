import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Contacts = (props) => {
  const [ contacts, setContacts ] = useState([])

  useEffect( () => {
    axios.get(`/api/jobs/${props.match.params.job_id}/contacts`)
    .then( res => {
        setContacts(res.data);
      })
  }, [])

  const handleRemove = (id) => {
      axios.delete(`/api/jobs/${props.match.params.job_id}/contacts/${id}`)
        .then( res => {
          setContacts(contacts.filter( c => c.id !== id))
        })
    }

  const renderContacts = (props) => {
    return contacts.map( contact => (
      <div key={contact.id}>
        <li >
          Name: {contact.first_name} {contact.last_name}
          <br/>
          Phone: {contact.phone}
          <br/>
          Email: {contact.email}
          <br/>
          Position: {contact.position}
          <br/>
          Department: {contact.department}
          <br/>
          Description: {contact.description}
          <br />
          <button>Edit</button>
          <button onClick={() => handleRemove(contact.id)}>Delete</button>
        </li>

        <button>Add</button>
      </div>
    ))
  }

  return (
    <div>
      { renderContacts() }
    </div>
  )
}

export default Contacts