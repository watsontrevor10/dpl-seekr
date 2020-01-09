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

  const renderNotes = () => {
    return (
      notes.map( (note) => (
        <>
          {note.body}
          <br/>
        </>
      ))
    )
  }

  const addNote = (note) => setNotes([ ...notes, note, ]);

  return (
    <div>
      <NotesForm job_id={job_id} add={addNote} />
      <br/>
      { renderNotes() }
    </div>
  )
}

export default Notes