import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NoteView from './NoteView'
import NotesForm from './NotesForm'

const Notes = (props) => {
  const [noteEdit, setNoteEdit] = useState(null)
  const [notes, setNotes] = useState([])
  const [form, setForm] = useState(false)
  const [editForm, setEditForm] = useState(false)

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
      })
  }

  // after a record has been updated, pulls new records from db
  const handleUpdate = () => {
    axios.get(`/api/jobs/${props.id}/notes`)
      .then(res => {
        setNotes(res.data);
      })
  }

  // toggle NotesForm on/off
  const toggle = () => {
    setForm(!form)

    if (form) {
      setNoteEdit(null)
    }
  }

  // sets state to be passed to NotesForm, toggles the edit version of the form, toggles the component
  const toggleEditForm = (note) => {
    setNoteEdit(note)
    setEditForm(!editForm)
    toggle()
  }

  // adds new record to state upon NotesForm submission
  const addNote = (note) => setNotes([...notes, note,]);

  // render all notes
  const renderNotes = (props) => {
    return (
      <>
        {notes.map(note => (
          <NoteView
            key={note.id}
            addNote={addNote}
            handleRemove={handleUpdate}
            handleRemove={handleRemove}
            toggleEditForm={toggleEditForm}
            note={note}
          />
        ))
        }
      </>
    )
  }

  return (
    <>
      <div className="main-notes-container">
        <div className="notes-container">
          <h2 className="form-heading">
            Notes
          </h2>
          <div
            className="btn-toggle"
            onClick={toggle}
          >
            {/* Displays the add icon or Cancel button depending on if NotesForm is rendered */}
            {form ?
              <button className="jobinfo-save-btn">
                Cancel
              </button>
              :
              <svg
                className="add-btn"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  d="M16 10c0 0.553-0.048 1-0.601 1h-4.399v4.399c0 0.552-0.447 0.601-1 0.601s-1-0.049-1-0.601v-4.399h-4.399c-0.552 0-0.601-0.447-0.601-1s0.049-1 0.601-1h4.399v-4.399c0-0.553 0.447-0.601 1-0.601s1 0.048 1 0.601v4.399h4.399c0.553 0 0.601 0.447 0.601 1z"
                >
                </path>
              </svg>
            }
          </div>
        </div>
        {/* Displays NotesForm or NoteView */}
        {
          form ?
            <NotesForm
              id={props.id}
              add={addNote}
              toggle={toggle}
              note={noteEdit}
              update={handleUpdate}
            />
            :
            <div className="notes-render-container">
              {renderNotes()}
            </div>
        }
      </div>
    </>
  )
}

export default Notes