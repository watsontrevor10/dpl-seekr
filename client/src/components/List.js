import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Modal from "./Modal"
import JobForm from "./JobForm";
import axios from 'axios'


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

    const showModal = () => {
      setOpenModal(!openModal);
    }

    const renderJobs = (name) => {
      return jobs.map( job => {
        if ( name === job.status ) {
        return (
        <div
          // to={`/job/${job.id}`}
          className="job-card"
          company={job.company_name}
          title={job.job_title}
          status={job.status}
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
        </div>
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
    <div>
      <h1 className="list-component-container">{props.name}</h1>
      <div onClick={showModal}>
        { renderJobs(props.name) }
        <button onClick={toggle}>Form</button>
        { toggleForm ? <JobForm toggle={toggle} add={addJob} /> : null }
        { openModal ? <Modal show={openModal} /> : null}
      </div>
    </div>
    </>
  )
}

export default List; 