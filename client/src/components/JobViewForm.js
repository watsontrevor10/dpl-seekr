import React, { useEffect, useState } from 'react'
import useFormInput from '../hooks/useFormInput'
import axios from 'axios'
import DeleteConfirmationModal from './DeleteConfirmationModal';

const JobViewForm = (props) => {

  const { values, handleChange, handleSubmit, setValues } = useFormInput(submit);
  const { company_name, job_title, status, date_applied, description, job_url, location, salary, color } = values
  const [success, setSuccess] = useState(false)

  useEffect(() => {
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
        color: props.job.color,

      })
    };
  }, []);

  const toggleSuccess = () => {
    setSuccess(false)
  }

  function submit() {
    const newJob = { company_name, job_title, status, date_applied, description, job_url, location, salary, color }
    if (props.job) {
      axios.put(`/api/jobs/${props.job.id}`, newJob)
        .then(res => {
          props.handleUpdate();
          setValues({})
          setSuccess(true)
          setInterval(toggleSuccess, 3000)
        })
    }
  };

  return (
    <>
    {success ? <div className="message"><h3 className="success">Successful!</h3></div> : null }
    <div className="container">
    <div className="notes-container">
      <h2 className="form-heading">{props.job.job_title}</h2>
      <button className="job-card-delete" onClick={() => props.showDelete() }>
        Delete this job
      </button>
      </div>
      <form onSubmit={handleSubmit} className="jobview-form info">
        <div className="all-inputs info-input">
          <div className="form-input">
            <h3>Company</h3>
            <input type="text" name="company_name" onChange={handleChange} value={company_name} />
          </div>
          <div className="form-input">
            <h3>Title</h3>
            <input type="text" name="job_title" onChange={handleChange} value={job_title} />
          </div>
          <div className="form-input">
            <h3>Location</h3>
            <input type="text" name="location" onChange={handleChange} value={location} />
          </div>
          <div className="form-input">
            <h3>Salary</h3>
            <input type="number" name="salary" onChange={handleChange} value={salary} />
          </div>  
          <div className="form-input">
            <h3>Date Applied</h3>
            <input type="date" name="date_applied" onChange={handleChange} value={date_applied} />
          </div>
          <div className="form-input">
            <h3>Status</h3>
            <select name="status" onChange={handleChange} value={status}>
              { jobStatus.map(j => (   
                <option onChange={handleChange} >
                  {j.value}
                </option>
                  )) 
                }
            </select>
          </div>
          <div className="form-input">
            <h3>Color</h3>
            <select name="color" onChange={handleChange} value={color} >
              { colors.map(c => (   
                <>
                  <option selected disabled hidden> 
                    Select a Color 
                  </option>
                  <option value={c.value} onChange={handleChange}>
                    {c.text}
                  </option>
                </>
                  )) 
                }
            </select>
          </div>
          <div className="form-input">
            <h3>Listing URL</h3>
            <input type="url" name="job_url" onChange={handleChange} value={job_url} />
          </div>
          <div className="form-input desc">
            <h3>Description</h3>
            <textarea name="description" onChange={handleChange} value={description} />
          </div>
          <div className="btns">
            <button 
              className="jobinfo-save-btn info"
              type="submit" value="Submit"
              > 
              Save
            </button>
            <button className="job-card-delete-mobile" onClick={() => props.showDelete() }>
                Delete this job
            </button>
          </div>
        </div>
      </form>
      </div>
      {props.deleteModal ? <DeleteConfirmationModal show={props.showDelete} hide={props.hideDelete} delete={props.delete} id={props.job.id} /> : null }
    </>
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
  { key: "a", text: "Blue", value: "#2d3a66", },
  { key: "b", text: "Light Blue", value: "#505995", },
  { key: "c", text: "Dark Blue", value: "#070059", },
  { key: "d", text: "Dark Purple", value: "#3d1a68", },
  { key: "e", text: "Purple", value: "#5e2d5e", },
];

export default JobViewForm