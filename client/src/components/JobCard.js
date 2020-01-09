import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobForm from '../components/JobForm';
import { Link } from 'react-router-dom';
import Modal from "./Modal"


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
      
      return <div key={props.id} className="card-content">
        <ul onClick={show}>
          <li className="card-title">{props.job_title}</li>
          <li className="card-meta">{props.company_name}</li>
          <li className="card-meta">{props.status}</li>
        </ul>
        <button onClick={() => props.deleteJob(props.id)}>Delete</button>
      </div>
  }

  
  // jobs Index component
  return (
    <div>
      <ul>
        { renderJob() }
      </ul>
      { openModal ? <Modal editJob={props.editJob} id={props.id} hide={hide} show={openModal} /> : null}
    </div>
  )
}

export default JobCard