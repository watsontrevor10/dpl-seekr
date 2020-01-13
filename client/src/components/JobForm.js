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
      <form onSubmit={handleSubmit}>
        Company Name: <br/>
        <input type="text" name="company_name" {...company} onChange={company.handleChange} /><br/>
        Job Title: <br/>
        <input type="text" name="job_title" {...job} onChange={job.handleChange}/><br/>
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
        <br />
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

const colors = [
  { key: "a", value: "Purple", text: "#7a0d9b", },
  { key: "b", value: "Red", text: "#cd3a50", },
  { key: "c", value: "Gold", text: "#c79106", },
  { key: "d", value: "Teal", text: "#12a9ba", },
  { key: "e", value: "Red Orange", text: "#d25511", },
  { key: "f", value: "Blue", text: "#4954e6", }
];

// const colors = [
//   "#7a0d9b", purple
//   "#cd3a50",pink
//   "#c79106", orange
//   "#189ad2", light blue
//   "#d25511", red orange
//  " #4954e6" blue 
// ];

export default JobForm