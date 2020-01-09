import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NotesForm from './NotesForm'

const Notes = (props) => {
  const [ notes, setNotes ] = useState([])
  const { job_id } =  props.match.params

  useEffect( () => {
    axios.get(`/api/jobs/${job_id}/notes`)
      .then( res => {
        setNotes(res.data)
      })
  }, [])

  const handleRemove = (id) => {
    axios.delete(`/api/jobs/${job_id}/notes/${id}`)
      .then( res => {
        setNotes(notes.filter( n => n.id !== id))
      })
  }

  const addNote = (note) => setNotes([ ...notes, note, ]);

  const renderNotes = () => {
    return (
      notes.map( (note) => (
        <>
          {note.body}
          <button onClick={() => handleRemove(note.id)}>Delete</button>
          <br/>
        </>
      ))
    )
  }

  return (
    <div>
      <NotesForm job_id={job_id} add={addNote} />
      <br/>
      { renderNotes() }
    </div>
  )
}

export default Notes