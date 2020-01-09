import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NotesForm from './NotesForm'

const Notes = (props) => {
  const [ noteEdit, setNoteEdit ] = useState(null)
  const [ notes, setNotes ] = useState([])
  const [ toggleForm, setToggleForm ] = useState(false)
  const [ editForm, setEditForm ] = useState(false)
  const { job_id } =  props.match.params

  // initial get request
  useEffect( () => {
    axios.get(`/api/jobs/${job_id}/notes`)
      .then( res => {
        setNotes(res.data)
      })
  }, [])

  // delete note function
  const handleRemove = (id) => {
    axios.delete(`/api/jobs/${job_id}/notes/${id}`)
      .then( res => {
        setNotes(notes.filter( n => n.id !== id))
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
    axios.get(`/api/jobs/${job_id}/notes`)
    .then( res => {
        setNotes(res.data);
      })
  }

  // adds new record to state upon NotesForm submission
  const addNote = (note) => setNotes([ ...notes, note, ]);

  // render all notes
  const renderNotes = (props) => {
    return (
      notes.map( (note, index) => (
        <>
            <p>
              {note.body}
            </p>
          
          <button onClick={() => handleRemove(note.id)}>
            Delete
          </button>
          <button onClick={() => toggleEditForm(index)}>
            Edit
          </button>
          <br/>
        </>
      ))
    )
  }

  return (
    <div>
      { toggleForm ? 
        <NotesForm 
          job_id={job_id} 
          add={addNote} 
          toggle={toggle}
          note={noteEdit}
          update={handleUpdate} 
        />  
        : ""
      }
      <button onClick={ () => toggle() }>
        {toggleForm ? 
          'Cancel' 
          : 'Add'
        }
      </button>
      <br/>
      { renderNotes() }
      <br/>
    </div>
  )
}

export default Notes