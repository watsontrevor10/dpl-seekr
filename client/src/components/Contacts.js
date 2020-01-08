import React, { useState, useEffect } from 'react'
import ContactForm from './ContactForm'
import axios from 'axios'

const Contacts = (props) => {
  const [ contacts, setContacts ] = useState([])
  const [ toggleForm, setToggleForm ] = useState(false)
  const { job_id } =  props.match.params 

  useEffect( () => {
    axios.get(`/api/jobs/${job_id}/contacts`)
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

  const toggle = () => {
    setToggleForm(!toggleForm)
  }

  const addContact = (contact) => setContacts([ ...contacts, contact, ]);

  const renderContacts = (props) => {
    return contacts.map( contact => (

      <>
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
          <br />
        </div>
      </>
    ))
  }

  return (
    <div>
      <button onClick={() => toggle() }>
        { toggleForm ? "Cancel" : "Add" }
      </button>
      { toggleForm ? <ContactForm toggle={toggle} add={addContact} job={job_id} /> : "" }
      <br/>
      <hr/>
      { renderContacts() }
    </div>
  )
}

export default Contacts