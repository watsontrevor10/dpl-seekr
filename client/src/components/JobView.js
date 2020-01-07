import React, { useState, useEffect } from 'react'
import useFormInput from '../hooks/useFormInput'
import axios from 'axios'

const JobView = (props) => {

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
    axios.get(`/api/jobs/${props.match.params.id}`)
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
        <select name="Status" {...status} value={job.status} />
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

export default JobView