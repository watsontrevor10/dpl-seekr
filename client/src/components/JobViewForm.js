import React, { useState, useEffect } from 'react'
import useFormInput from '../hooks/useFormInput'
import axios from 'axios'

const JobViewForm = (props) => {

  const { values, handleChange, handleSubmit, setValues} = useFormInput(submit);
  const { company_name, job_title, status, date_applied, description, job_url, location, salary } = values

  useEffect( () => {
    if (props.job) {
      setValues({
        company_name: props.job.company_name, 
        job_title: props.job.job_title, 
        date_applied: props.job.date_applied,
        description: props.job.description,
        job_url: props.job.job_url,
        location: props.job.location,
        salary: props.job.salary,
        status: props.job.status,

      })
    };
  }, [] );

  function submit() {
    const newJob = { company_name, job_title, status, date_applied, description, job_url, location, salary }
      if (props.job) {
        axios.put(`/api/jobs/${props.job.id}`, newJob)
        .then(res => {
          props.handleUpdate();
          setValues({})
      })
    }
  };

  return (
    <>
      {/* <div>
        <h1> Job View Page </h1>
      </div> */}
      <form onSubmit={handleSubmit} className="jobview-form">
        Company:
        <input type="text" name="company_name" onChange={handleChange} value={company_name} />
        <br />
        Job Title:
        <input type="text" name="job_title" onChange={handleChange} value={job_title} />
        <br />
        Description:
        <textarea name="description" onChange={handleChange} value={description} />
        <br />
        Date Applied:
        <input type="date" name="date_applied" onChange={handleChange} value={date_applied} />
        <br />
        Location:
        <input type="text" name="location" onChange={handleChange} value={location} />
        <br />
        Salary:
        <input type="number" name="salary" onChange={handleChange} value={salary} />
        <br />
        Status:
        <select name="status" onChange={handleChange} value={status}>
          { jobStatus.map(j => (   
            <option onChange={handleChange} >
              {j.value}
            </option>
              )) 
          }
        </select>
        <br />
        Job URL:
        <input type="url" name="job_url" onChange={handleChange} value={job_url} />
        <br />
        {/* COLOR <input type="text" name="Description"/> */}
        <button type="submit" value="Submit"> save </button>
      </form>
    </>
  )
}

const jobStatus = [
  { key: "a", text: "Wishlist", value: "Wishlist", },
  { key: "b", text: "Applied", value: "Applied", },
  { key: "c", text: "Interviewed", value: "Interviewed", },
  { key: "d", text: "Offer", value: "Offer", },
  { key: "e", text: "Rejected", value: "Rejected", }
];

export default JobViewForm