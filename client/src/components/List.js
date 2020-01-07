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
          jobs={job.company_name}
        >
        <div key={job.id}>
          <li >
            {job.company_name} 
            <br/>
            {job.job_title}
            <br />
            {job.status}
            <br />
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
      <h1 className="list-component-container">{props.name}</h1>
      <div>
        { renderJobs(props.name) }
        <button onClick={toggle}>Form</button>
        { toggleForm ? <JobForm toggle={toggle} add={addJob} /> : null }
      </div>
    </>
  )
}

export default List; 