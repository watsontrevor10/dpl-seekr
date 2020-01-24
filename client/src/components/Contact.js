import React, { useState, } from 'react';
import DeleteModal from './DeleteModal';

const Contact = (props) => {
  const { contact, handleEdit, index, handleRemove, } = props
  const [deleteModal, setDeleteModal] = useState(false)

  const toggleDelete = () => {
    setDeleteModal(true)
  }

  const hideDelete = () => {
    setDeleteModal(!deleteModal)
  }

  return(
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
  );
};

export default Contact;