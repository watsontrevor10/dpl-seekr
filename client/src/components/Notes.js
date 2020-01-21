import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NotesForm from './NotesForm'
import DeleteModal from "./DeleteModal";


const Notes = (props) => {
  const [noteEdit, setNoteEdit] = useState(null)
  const [notes, setNotes] = useState([])
  const [toggleForm, setToggleForm] = useState(false)
  const [editForm, setEditForm] = useState(false)
    // State for toggling delete confirmation modal 
    const [deleteModal, setDeleteModal] = useState(false)


    const toggleDelete = () => {
      setDeleteModal(true)
    }
    const hideDelete = () => {
      setDeleteModal(!deleteModal)
    }


  // initial get request
  useEffect(() => {
    axios.get(`/api/jobs/${props.id}/notes`)
      .then(res => {
        setNotes(res.data)
      })
  }, [])

  // delete note function
  const handleRemove = (id) => {
    axios.delete(`/api/jobs/${props.id}/notes/${id}`)
      .then(res => {
        setNotes(notes.filter(n => n.id !== id))
        hideDelete()
      })
  }

  // toggle NotesForm on/off
  const toggle = () => {
    setToggleForm(!toggleForm)

    if (toggleForm) {
      setNoteEdit(null)
    }
  }

  // sets state to be passed to NotesForm, toggles the edit version of the form, toggles the component
  const toggleEditForm = (noteIndex) => {
    setNoteEdit(notes[noteIndex])
    setEditForm(!editForm)
    toggle()
  }

  // after a record has been updated, pulls new records from db
  const handleUpdate = () => {
    axios.get(`/api/jobs/${props.id}/notes`)
      .then(res => {
        setNotes(res.data);
      })
  }

  // adds new record to state upon NotesForm submission
  const addNote = (note) => setNotes([...notes, note,]);

  // render all notes
  const renderNotes = (props) => {
    return (
      notes.map((note, index) => (
        <>
        <div key={note.id} className="note-card">
          <div className="note-content">
            <p>
              {note.body}
            </p>
          </div>
          <div className="card-btns-flex">
            <div className="card-btns-div">
              <div className="notes-padding-btn">
                <button onClick={() => toggleEditForm(index)} className="edit-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </button>
              </div>
              <div className="notes-padding-btn">
                <button onClick={() => toggleDelete()} className="modal-info-delete-btn">
                  Delete
                </button>
              </div>
            </div>
          </div>
          { deleteModal ? <DeleteModal show={toggleDelete} hide={hideDelete} delete={handleRemove} id={note.id} />: null }
        </div>
        </>
      ))
    )
  }

  return (
    <>
    <div className="main-notes-container">
      <div className="notes-container">
      <h2 className="form-heading">Notes</h2>
        <button onClick={() => toggle()} className="jobinfo-save-btn">
          {toggleForm ?
            'Cancel'
            : 'Add'
          }
        </button>
      </div>
      {
        toggleForm ?
          <NotesForm
            id={props.id}
            add={addNote}
            toggle={toggle}
            note={noteEdit}
            update={handleUpdate}
          />
          :<div className="notes-render-container">{renderNotes()}</div>
        }
    </div>
    </>
  )
}

export default Notes