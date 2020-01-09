import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Modal from "./Modal"
import JobForm from "./JobForm";
import axios from 'axios'
import JobCard from "./JobCard"; 

const List = (props) => {

    // State for looping through users jobs
    const [ jobs, setJobs ] = useState([])
    const [ toggleForm, setToggleForm] = useState(false)
    const [ openModal, setOpenModal ] = useState(false)
    // const [ specificJob, setSepecificJob] = useState([]);
    
    // axios call to get all user jobs
    useEffect( () => {
      axios.get('/api/jobs')
        .then( res => {
          setJobs(res.data);
        })
    }, [])
  
    const toggle = () => {
      setToggleForm(!toggleForm);
    }


    const deleteJob = (id) => {
      axios.delete(`/api/jobs/${id}`)
      .then(res => {
        setJobs(jobs.filter(j => j.id !== id))
      })
    }

    const editJob = (data, id) => {
      debugger
      axios.put(`/api/jobs/${id}`, data)
      .then(res => { 
        const newJobs = jobs.map(job => {
          if (job.id === id)
            return data
        })
        setJobs(newJobs)
      })
    }

    const renderJobs = (name) => {
      return jobs.map( job => {
        if ( name === job.status ) {
          return (
          <>
            <div
            // to={`/job/${job.id}`}
            className="job-card"
            company={job.company_name}
            title={job.job_title}
            status={job.status}
            >
              <JobCard deleteJob={deleteJob} editJob={editJob} {...job}/>
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
    <div>
      <h1 className="list-component-container">{props.name}</h1>
        <button onClick={toggle}>Form</button>
        { toggleForm ? <JobForm toggle={toggle} add={addJob} /> : null }
        { renderJobs(props.name) }
    </div>
    </>
  )
}

export default List; 