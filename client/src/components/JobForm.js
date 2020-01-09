import React, { useState } from 'react'
import axios from 'axios'
import useFormInput from '../hooks/useFormInput'

const JobForm = (props) => {
  // State for fields in the form, using a custom hook (useFormInput) to simplify state a bit
  const company = useFormInput('')
  const job = useFormInput('')
  const status = useFormInput('')

  // submit function, axios post call.  Need to add each field name to the post request
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/jobs', { company_name: company.values.company_name, job_title: job.values.job_title, status: status.values.status })
    .then(res => {
        props.add(res.data);
        props.toggle();
      })
  };

  // Form component
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Company Name: <br/>
        <input type="text" name="company_name" {...company} onChange={company.handleChange} /><br/>
        Job Title: <br/>
        <input type="text" name="job_title" {...job} onChange={job.handleChange}/><br/>
        <select name="status" {...status} onChange={status.handleChange} >
          { jobStatus.map(j => (   
            <option value={j.value}>
              {j.value}
            </option>
              )) 
          }
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

const jobStatus = [
  { key: "a", text: "Wishlist", value: "Wishlist", },
  { key: "b", text: "Applied", value: "Applied", },
  { key: "c", text: "Interviewed", value: "Interviewed", },
  { key: "d", text: "Offer", value: "Offer", },
  { key: "e", text: "Rejected", value: "Rejected", }
];

export default JobForm