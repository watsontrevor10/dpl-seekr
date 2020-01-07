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
    axios.post('/api/jobs', { company_name: company.value, job_title: job.value, status: status.value })
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
        <input type="text" name="company_name" {...company} /><br/>
        Job Title: <br/>
        <input type="text" name="job_title" {...job} /><br/>
        <select name="status" {...status}>
          { jobSearch.map(j => (   
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

const jobSearch = [
  { key:'a', name:'Wishlist', value:'Wishlist'},
  { key:'b', name:'Applied', value:'Applied'},
  { key:'c', name:'Interview', value:'Wishlist'},
  { key:'d', name:'Offer', value:'Offer'},
  { key:'e', name:'Rejected', value:'Rejected'},
]

export default JobForm