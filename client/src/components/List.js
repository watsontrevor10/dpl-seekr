import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Jobs from "./Jobs"; 
import JobForm from "./JobForm";
import axios from 'axios'


const List = (props) => {

    // State for looping through users jobs
    const [ jobs, setJobs ] = useState([])
    const [ toggleForm, setToggleForm] = useState(false)
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

    const renderJobs = (name) => {
      return jobs.map( job => {
        if ( name === job.status ) {
        return (
        <Link 
          to={`/job/${job.id}`}
          style={{ textDecoration: 'none' }}
          jobs={job.company_name}
        >
        <div 
          className="job-card"
          key={job.id}>
          <li >
            <ul>{job.company_name}</ul>
            <ul>{job.job_title}</ul>
            <ul>{job.status}</ul>
          </li>
        </div>
        </Link>
        )}
        return (
          <></>
        )
        })
    }

    
  
    // Passing this function into JobForm as a prop
    const addJob = (job) => setJobs([ ...jobs, job, ]);

  return(
    <>
    <div className="list-component-container">
      <h1>{props.name}</h1>
      <button onClick={toggle}>Form</button>
        { toggleForm ? <JobForm toggle={toggle} add={addJob} /> : null }
      <div className="render-jobs">
        { renderJobs(props.name) }
      </div>
    </div>
    </>
  )
}

export default List; 