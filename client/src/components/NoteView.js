import React, { useState } from 'react'
import DeleteModal from './DeleteModal'

const NoteView = (props) => {
  const { body, id } = props.note
  // State for toggling delete confirmation modal 
  const [deleteModal, setDeleteModal] = useState(false)
  // Enables DeleteModal
  const toggleDelete = () => {
    setDeleteModal(true)
  }
  // Hides DeleteModal
  const hideDelete = () => {
    setDeleteModal(!deleteModal)
  }

  // render all notes
  return (
    <>
      {/* displays body of note */}
      <div key={id} className="note-card">
        <div className="note-content">
          <p>
            {body}
          </p>
        </div>
        <div className="card-btns-flex">
          <div className="card-btns-div">
            {/* edit button */}
            <div className="notes-padding-btn">
              <button
                onClick={() => props.toggleEditForm(props.note)}
                className="edit-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-edit"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">
                  </path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z">
                  </path>
                </svg>
              </button>
            </div>
            {/* Delete button, toggles DeleteModal on */}
            <div className="notes-padding-btn">
              <button
                onClick={() => toggleDelete()}
                className="modal-info-delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        {/* Delete Modal, appears when click delete button */}
        {deleteModal ?
          <DeleteModal
            show={toggleDelete}
            hide={hideDelete}
            delete={props.handleRemove}
            id={id}
          />
          : null}
      </div>
    </>
  )
}

export default NoteView