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
              <button onClick={() => handleEdit(index)} className="edit-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              </button>
              <button onClick={() => toggleDelete()} className="modal-info-delete-btn">Delete</button>
            </div>
            { deleteModal ? <DeleteModal show={toggleDelete} hide={hideDelete} delete={handleRemove} id={contact.id} />: null }
        </div>
      </>
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
              <button className="jobinfo-save-btn">Cancel</button>
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