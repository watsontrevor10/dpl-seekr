import React, { useState } from 'react';
import DeleteModal from "./DeleteModal";

const Interview = (props) => {

const [deleteModal, setDeleteModal] = useState(false)

  const toggleDelete = () => {
   setDeleteModal(true)
 }
 const hideDelete = () => {
   setDeleteModal(!deleteModal)
 }


  return (
    <>
      <div className="interviews-content">
        <h2>{props.interview.subject}</h2>
        <p>{props.interview.date}</p>
        <p>{props.interview.interview_type}</p>
        <p>{props.interview.description}</p>
        <p>{props.interview.follow_up}</p>
        </div>
          <div className="card-btns-flex">
          <div className="card-btns-div"> 
            <button
              className="edit-btn"
              onClick={() => props.handleEdit(props.interview)}
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </button>
            <button
              className="modal-info-delete-btn"
              onClick={() => toggleDelete()}
              >
              Delete
            </button>
          </div>
          { deleteModal ? <DeleteModal show={toggleDelete} hide={hideDelete} delete={props.handleDelete} id={props.interview.id}/> : null }
      </div>
    </>

  );
};

export default Interview;

