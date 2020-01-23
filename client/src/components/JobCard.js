import React, { useState } from 'react';
// import axios from 'axios';
// import JobForm from '../components/JobForm';
// import { Link } from 'react-router-dom';
// import DeleteConfirmation from "./DeleteConfirmationModal";
import Modal from "./Modal"
import Moment from 'react-moment';
import 'moment-timezone';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const JobCard = (props) => {
  // State for looping through users jobs
  const [openModal, setOpenModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

  // axios call to get all user jobs

  // const randomColor = colors[Math.floor(Math.random() * colors.length)];
  //   console.log(randomColor);

  const show = () => {
    setOpenModal(true);
  }
  const hide = () => {
    setOpenModal(!openModal);
  }
  const toggleDelete = () => {
    setDeleteModal(true)
  }
  const hideDelete = () => {
    setDeleteModal(!deleteModal)
  }

  const renderJob = () => {

    return <div key={props.job.id} className="card-content"
      // style={{backgroundColor: `${randomColor}`}}  
      style={props.name === "Archived" ? { backgroundColor: `#da5740` } : { backgroundColor: `${props.job.color}` }}
    >
      <ul onClick={show}>
        <li className="card-title">{props.job.job_title}</li>
        <div className="container-card-meta">
          <li className="card-meta">{props.job.company_name}</li>
          <li className="card-meta">{props.job.status}</li>
          <li className="card-meta"><Moment format="MM/DD/YYYY">{props.job.created_at}</Moment></li>
        </div>
      </ul>
      {/* <button className="job-card-delete" onClick={() => toggleDelete() }>Delete</button> */}
      {deleteModal ? <DeleteConfirmationModal show={toggleDelete} hide={hideDelete} delete={props.deleteJob} id={props.job.id} /> : null }
    </div>
  }


  // jobs Index component
  return (
    <>
      <ul >
        {renderJob()}
      </ul>
      {openModal ? <Modal handleUpdate={props.handleUpdate} job={props.job} hide={hide} show={openModal} showDelete={toggleDelete} hideDelete={hideDelete} delete={props.deleteJob} deleteModal={deleteModal} /> : null}
    </>
  )
}

export default JobCard