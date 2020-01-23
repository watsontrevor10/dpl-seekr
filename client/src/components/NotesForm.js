import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useFormInput from '../hooks/useFormInput'

const NotesForm = (props) => {
  const [note, setNote] = useState(props.note ?
    props.note
    : null
  )
  const { values, setValues, handleChange } = useFormInput(submit)
  const { body } = values

  useEffect(() => {
    if (note) {
      setValues({ ...note })
    }
  }, [])

  // submit form and toggle NotesForm off
  function submit(e) {
    const newNote = { body }
    if (note) {
      e.preventDefault()
      axios.patch(`/api/jobs/${props.id}/notes/${note.id}`, newNote)
        .then(res => {
          setNote(res.data)
          props.toggle()
          props.update()
        })
    } else {
      e.preventDefault();
      axios.post(`/api/jobs/${props.id}/notes`, newNote)
        .then(res => {
          props.add(res.data);
          props.toggle()
        })
    }
  };

  // Form component
  if (note) {
    // edit form
    return (
      <div className="form-container-notes">
        <form onSubmit={submit} className="notesview-form info">
          <div className="note-inputs">
            <textarea
              name="body"
              value={body}
              {...body}
              onChange={handleChange}
              placeholder="add a note"
            />
          </div>
          <button
            type="submit"
            value="Submit"
            className="jobinfo-save-btn note"
          >
            Save
          </button>
        </form>
      </div>
    )
  } else {
    // add form
    return (
      <div className="form-container-notes">
        <form
          onSubmit={submit}
          className="notesview-form info"
        >
          <div className="note-inputs">
            <textarea
              name="body"
              {...body}
              onChange={handleChange}
              placeholder="add a note"
            />
          </div>
          <button
            type="submit"
            value="Submit"
            className="jobinfo-save-btn"
          >
            Save
          </button>
        </form>
      </div>
    )
  }
}


export default NotesForm


