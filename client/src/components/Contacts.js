import React, { useState, useEffect } from 'react'
import ContactForm from './ContactForm'
import axios from 'axios'
import DeleteModal from "./DeleteModal";

const Contacts = (props) => {
  // State for looping contacts on page
  const [contacts, setContacts] = useState([])
  // State for passing props down to ContactForm when editing a contact
  const [editContact, setEditContact] = useState(null)
  // State for toggling ContactForm add/edit form
  const [toggleForm, setToggleForm] = useState(false)
  // State for toggling delete confirmation modal 
  const [deleteModal, setDeleteModal] = useState(false)


  const toggleDelete = () => {
    setDeleteModal(true)
  }
  const hideDelete = () => {
    setDeleteModal(!deleteModal)
  }


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
        hideDelete()
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
      <>
        <div key={contact.id} className="contact-card">
          <div className="contact-content">
            <h4>Name</h4>
            <p>{contact.first_name} {contact.last_name}</p>
          </div>
          <div className="contact-content">
            <h4>Phone </h4>
            <p>{contact.phone}</p>
          </div>
          <div className="contact-content">
            <h4>Email </h4>
            <p>{contact.email}</p>
          </div>
          <div className="contact-content">
            <h4>Position</h4> 
            <p>{contact.position}</p>
          </div>
          <div className="contact-content">
            <h4>Department</h4> 
            <p>{contact.department}</p>
          </div>
          <div className="contact-content desc">
            <h4>Description</h4>
            <p>{contact.description}</p>
          </div>
            <div className="contact-btns">
              <button onClick={() => handleEdit(index)} className="jobinfo-save-btn contact-btn">Edit</button>
              <button onClick={() => toggleDelete()} className="contact-delete-btn">Delete</button>
            </div>
            { deleteModal ? <DeleteModal show={toggleDelete} hide={hideDelete} delete={handleRemove} id={contact.id} />: null }
        </div>
      </>
    ))
  }

  return (
    <>
      <div className="main-contact-container">
        <div className="contact-container">
          <h2 className="form-heading">Contacts</h2>
          <button onClick={() => toggle()} className="jobinfo-save-btn">
            {toggleForm ? "Cancel" : "Add"}
          </button>
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