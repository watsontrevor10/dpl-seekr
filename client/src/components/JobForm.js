import React, { useState } from 'react'
import axios from 'axios'
import useFormInput from '../hooks/useFormInput'

const JobForm = (props) => {
  // State for fields in the form, using a custom hook (useFormInput) to simplify state a bit
  const company = useFormInput('')
  const job = useFormInput('')
  const status = useFormInput('')
  const color = useFormInput('')

  // submit function, axios post call.  Need to add each field name to the post request
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/jobs', { company_name: company.values.company_name, job_title: job.values.job_title, status: status.values.status, color: color.values.color })
    .then(res => {
        props.add(res.data);
        props.hide();
      })
  };

  // Form component
  return (
    <div className="new-job">
      <h1>Add a new job</h1>
      <form onSubmit={handleSubmit} className="jobview-form">
        <div className="all-inputs">
          <div className="form-input">
            Company
            <input type="text" name="company_name" {...company} onChange={company.handleChange} />
          </div>
          <div className="form-input">
          Job Title
          <input type="text" name="job_title" {...job} onChange={job.handleChange}/>
          </div>
          <div className="form-input">
            Status
            <select name="status" {...status} onChange={status.handleChange} >
              { jobStatus.map(j => (   
                <>
                  <option value="none" selected disabled hidden> 
                    Select an Option 
                  </option>
                  <option value={j.value}>
                    {j.value}
                  </option>
                </>
                  )) 
              }
            </select>
          </div>
          <div className="form-input">
            Color
            <select name="color" {...color} onChange={color.handleChange} >
              { colors.map(c => (   
                <>
                  <option value="none" selected disabled hidden> 
                    Select an Option 
                  </option>
                  <option value={c.text}>
                    {c.value}
                  </option>
                </>
                  )) 
              }
            </select>
          </div>
          </div>
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
  { key: "e", text: "Rejected", value: "Rejected", },
  { key: "f", text: "Archived", value: "Archived", }
];

const colors = [
  { key: "a", value: "Blue", text: "#2d3a66", },
  { key: "b", value: "Light Blue", text: "#5b6293", },
  { key: "c", value: "Dark Blue", text: "#070059", },
  { key: "d", value: "Dark Purple", text: "#3d1a68", },
  { key: "e", value: "Purple", text: "#5e2d5e", },
  { key: "f", value: "Red", text: "#da5740", }
];


export default JobForm