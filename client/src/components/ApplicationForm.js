import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ApplicationForm = (props) => {
  const [ company, setCompany ] = useState(' ')
  const [ job, setJob ] = useState(' ')

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger
    axios.post("/api/applications", { company, job, })
      .then(res => {
        props.add(res.data);
      })
  };

  return (
    <div>
      <form onSubmti={handleSubmit}>
        Company Name: <br/>
        <input type="text" name="company_name" onChange={(e) => setCompany(e.target.value)} value={company} /><br/>
        Job Title: <br/>
        <input type="text" name="job_title" onChange={(e) => setJob(e.target.value)} value={job} /><br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ApplicationForm