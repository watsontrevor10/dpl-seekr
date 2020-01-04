import React, { useState } from 'react'
import axios from 'axios'
import useFormInput from '../hooks/useFormInput'

const ApplicationForm = (props) => {
  const company = useFormInput('')
  const job = useFormInput('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/applications', { company_name: company.value, job_title: job.value, })
    .then(res => {
        props.add(res.data);
      })
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Company Name: <br/>
        <input type="text" name="company_name" {...company} /><br/>
        Job Title: <br/>
        <input type="text" name="job_title" {...job} /><br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ApplicationForm