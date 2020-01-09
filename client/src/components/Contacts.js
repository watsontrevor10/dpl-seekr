import React, { useState, useEffect } from 'react'
import ContactForm from './ContactForm'
import axios from 'axios'

const Contacts = (props) => {
  // State for looping contacts on page
  const [ contacts, setContacts ] = useState([])
  // State for passing props down to ContactForm when editing a contact
  const [ editContact, setEditContact ] = useState(null)
  // State for toggling ContactForm add/edit form
  const [ toggleForm, setToggleForm ] = useState(false)
 

  useEffect( () => {
    axios.get(`/api/jobs/${props.id}/contacts`)
    .then( res => {
        setContacts(res.data);
      })
  }, [])

  // function for removing contacts
  const handleRemove = (id) => {
      axios.delete(`/api/jobs/${props.id}/contacts/${id}`)
        .then( res => {
          setContacts(contacts.filter( c => c.id !== id))
        })
    }

  // toggles add/edit versions of ContactForm and resets setEditContact state
  const toggle = () => {
    setToggleForm(!toggleForm)

    if (toggleForm) {
      setEditContact(null)
    }
  }

  // finds a contact by index from contacts to be passed down to ContactForm and toggles form on
  const handleEdit = (contactIndex) => { 
    setEditContact(contacts[contactIndex]);
    toggle()
  }

  // re-renders component after ContactForm has updated an existing contact
  const handleUpdate = () => {
    axios.get(`/api/jobs/${props.id}/contacts`)
    .then( res => {
        setContacts(res.data);
      })
  }

  // adds new contact to state after form submission
  const addContact = (contact) => setContacts([ ...contacts, contact, ]);

  // render all contacts
  const renderContacts = (props) => {
    return contacts.map( (contact, index) => (
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
            <button onClick={() => handleEdit(index)}>Edit</button>
            <br />
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
      { toggleForm ? 
        <ContactForm 
          toggle={toggle} 
          add={addContact} 
          id={props.id} 
          contactProp={editContact} 
          update={handleUpdate}
        /> : "" 
      }
      <br/>
      <hr/>
      <br/>
      <br/>
      <br/>
      { renderContacts() }
    </div>
  )
}

export default Contacts