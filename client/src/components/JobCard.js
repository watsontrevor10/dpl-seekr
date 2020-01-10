import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobForm from '../components/JobForm';
import { Link } from 'react-router-dom';
import Modal from "./Modal"
import Moment from 'react-moment';
import 'moment-timezone';

const JobCard = (props) => {
  // State for looping through users jobs
  const [ openModal, setOpenModal ] = useState(false)
  
  // axios call to get all user jobs


  const show = () => {
    setOpenModal(true);
  }
  const hide = () => {
    
    setOpenModal(!openModal);
  }

  const renderJob = () => {
      
      return <div key={props.job.id} className="card-content">
        <ul onClick={show}>
          <li className="card-title">{props.job.job_title}</li>
          <div className="container-card-meta">
            <li className="card-meta">{props.job.company_name}</li>
            <li className="card-meta">{props.job.status}</li>
            <li className="card-meta"><Moment format="MM/DD/YYYY">{props.job.created_at}</Moment></li>
          </div>
        </ul>
        <button className="job-card-delete" onClick={() => props.deleteJob(props.job.id)}>Delete</button>
      </div>
  }

  
  // jobs Index component
  return (
    <>
      <ul>
        { renderJob() }
      </ul>
      { openModal ? <Modal handleUpdate={props.handleUpdate} job={props.job} hide={hide} show={openModal} /> : null}
    </>
  )
}

export default JobCard