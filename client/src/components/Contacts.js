import React, { useState, useEffect } from 'react'
import ContactForm from './ContactForm'
import axios from 'axios'
import DeleteModal from "./DeleteModal";
import Contact from './Contact';

const Contacts = (props) => {
  // State for looping contacts on page
  const [contacts, setContacts] = useState([])
  // State for passing props down to ContactForm when editing a contact
  const [editContact, setEditContact] = useState(null)
  // State for toggling ContactForm add/edit form
  const [toggleForm, setToggleForm] = useState(false)

  useEffect(() => {
    axios.get(`/api/jobs/${props.id}/contacts`)
      .then(res => {
        setContacts(res.data);
      })
  }, [])

  // function for removing contacts
  const handleRemove = (id) => {
    axios.delete(`/api/jobs/${props.id}/contacts/${id}`)
      .then(res => {
        setContacts(contacts.filter(c => c.id !== id))
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
      .then(res => {
        setContacts(res.data);
      })
  }

  // adds new contact to state after form submission
  const addContact = (contact) => setContacts([...contacts, contact,]);

  // render all contacts
  const renderContacts = (props) => {
    return contacts.map((contact, index) => (
      <Contact 
        contact={contact} 
        handleEdit={handleEdit} 
        index={index}   
        handleRemove={handleRemove} />
    ))
  }

  return (
    <>
      <div className="main-form-container">
        <div className="block">
          <div className="notes-container">
            <h2 className="form-heading">Contacts</h2>
            <div className="btn-toggle" onClick={toggle}
            >
            { toggleForm ?
              <button className="jobinfo-save-btn fill2">Cancel</button>
              : 
              <svg className="add-btn" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path d="M16 10c0 0.553-0.048 1-0.601 1h-4.399v4.399c0 0.552-0.447 0.601-1 0.601s-1-0.049-1-0.601v-4.399h-4.399c-0.552 0-0.601-0.447-0.601-1s0.049-1 0.601-1h4.399v-4.399c0-0.553 0.447-0.601 1-0.601s1 0.048 1 0.601v4.399h4.399c0.553 0 0.601 0.447 0.601 1z"></path>
              </svg>
            }
          </div>
          </div>
        </div>
        <div className="contacts">
          {toggleForm ?
            <ContactForm
            toggle={toggle}
            add={addContact}
            id={props.id}
            contactProp={editContact}
            update={handleUpdate}
            /> : renderContacts()
          }
        </div>
      </div>
    </>
  )
}

export default Contacts