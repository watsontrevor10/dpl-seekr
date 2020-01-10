import React, {useState} from 'react'
import axios from 'axios'
import useFormInput from '../hooks/useFormInput'

const NotesForm = (props) => {
  const [ note, setNote ] = useState(props.note ? 
    props.note
    : null
  )
  const body = useFormInput(note ? note.body : '')

  // submit form and toggle NotesForm off
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/jobs/${props.id}/notes`, { body: body.values.body, })
    .then(res => {
        props.add(res.data);
        props.toggle()
      })
  };

  // function for updating existing records
  const handleUpdate = (e) => {
    e.preventDefault()
    axios.patch(`/api/jobs/${props.id}/notes/${note.id}`, 
    {
      body: body.values.body,
    })
      .then( res => {
        setNote(res.data)
        props.toggle()
        props.update()
      })
  }

  // Form component
  if (note) {
    // edit form
    return (
      <div className="form-container">
        <form onSubmit={handleUpdate}>
        Note  
          <input 
            type="textarea" 
            name="body" 
            placeholder={note.body}
            {...body} 
            onChange={body.handleChange}
          />
          <input type="submit" value='Save' />
        </form>
      </div>
    )} else {
      // add form
      return (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input 
              type="textarea" 
              name="body" 
              {...body}
              onChange={body.handleChange}
              />
            <input type="submit" value="Save" />
          </form>
        </div>
      )} 
} 


export default NotesForm


