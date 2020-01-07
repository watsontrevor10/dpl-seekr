import React from 'react'
import axios from 'axios'

import useFormInput from '../hooks/useFormInput'

const NotesForm = (props) => {

  const body = useFormInput('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/:job_id/new_note', { body: body.value, })
    .then(res => {
        props.add(res.data);
      })
  };

  // Form component
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        Note <br/>
        <input 
          type="text" 
          name="body" 
          {...body} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default NotesForm


