import React, { useState, useEffect } from 'react';
import NewJobModal from "./NewJobModal";
import axios from 'axios'
import JobCard from "./JobCard";

const List = (props) => {
    // State for looping through users jobs
    const [ jobs, setJobs ] = useState([])
    const [ openModal, setOpenModal ] = useState(false)

  const show = () => {
    setOpenModal(true);
  }
  const hide = () => {
    setOpenModal(!openModal);
  }

    useEffect( () => {
      axios.get('/api/jobs')
        .then( res => {
          setJobs(res.data);
        })
    }, [])

    const deleteJob = (id) => {
      axios.delete(`/api/jobs/${id}`)
      .then(res => {
        setJobs(jobs.filter(j => j.id !== id))
      })
    }

    const handleUpdate = () => {
      axios.get(`/api/jobs`)
      .then( res => {
          setJobs(res.data);
        })
    };

    const renderJobs = (name) => {
      return jobs.map( job => {
        if ( name === job.status ) {
          return (
          <>
            <div
            key={job.id}
            company={job.company_name}
            title={job.job_title}
            status={job.status}
            className={`job-card ${job.id}`}
            >
              <JobCard handleUpdate={handleUpdate} deleteJob={deleteJob} job={job}/>
            </div>
          </>
        )}
        return (
          <></>
        )
      })
    }
    // Passing this function into JobForm as a prop
    const addJob = (job) => setJobs([ ...jobs, job, ]);
  return (
    <>
    <div className="list-component-container">
      <h1 className="list-header">{props.name}</h1>
        <button className="new-job-btn" onClick={show}>Add Job</button>
        { openModal ? <NewJobModal add={addJob} hide={hide} show={openModal}/> : null }
        { renderJobs(props.name) }
    </div>
    </>
  )
}
export default List;
