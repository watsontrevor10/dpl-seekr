import React, { useState, useEffect } from 'react'
import useFormInput from '../hooks/useFormInput'
import axios from 'axios'

const JobViewForm = (props) => {

  const [job, setJob] = useState([])

  const company = useFormInput('')
  const dateApplied = useFormInput('')
  const description = useFormInput('')
  const jobTitle = useFormInput('')
  const jobURL = useFormInput('')
  const location = useFormInput('')
  const salary = useFormInput('')
  const status = useFormInput('')

  useEffect(() => {
    axios.get(`/api/jobs/${props.id}`)
      .then(res => {
        setJob(res.data)
      })
  }, [])

  return (
    <>
      <div>
        <h1> Job View Page </h1>
      </div>
      <form>
        Company:
        <input type="text" name="Company" {...company} value={job.company_name} />
        <br />
        Job Title:
        <input type="text" name="Job Title" {...jobTitle} value={job.job_title} />
        <br />
        Description:
        <textarea name="Description" {...description} value={job.description} />
        <br />
        Date Applied:
        <input type="date" name="Date Applied" {...dateApplied} value={job.date_applied} />
        <br />
        Location:
        <input type="text" name="location" {...location} value={job.location} />
        <br />
        Salary:
        <input type="number" name="Salary" {...salary} value={job.salary} />
        <br />
        Status:
        <select name="status" {...status} value={job.status}>
          <option value={job.status}>

          </option>
        </select>
        <br />
        Job URL:
        <input type="url" name="Job URL" {...jobURL} value={job.job_url} />
        <br />
        {/* COLOR <input type="text" name="Description"/> */}
        <button> save </button>
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