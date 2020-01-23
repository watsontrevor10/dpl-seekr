import React, { useState } from 'react';
import Modal from "./Modal"
import Moment from 'react-moment';
import 'moment-timezone';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const JobCard = (props) => {
  // State for looping through users jobs
  const [openModal, setOpenModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

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
      style={
        props.name === "Archived" ?
          { backgroundColor: `#da5740` }
          : {
            backgroundColor: `${props.job.color}`
          }}
    >
      <ul onClick={show}>
        {/* Job Title */}
        <li className="card-title">
          {props.job.job_title}
        </li>
        <div className="container-card-meta">
          {/* Company Name */}
          <li className="card-meta">
            {props.job.company_name}
          </li>
          {/* Date Created */}
          <li className="card-meta">
            Date Created: <Moment format="MM/DD/YYYY">{props.job.created_at}</Moment>
          </li>
          {/* Date Applied */}
          <li className="card-meta">
            <p>Date Applied: </p>
            {props.job.date_applied ?
              <Moment format="MM/DD/YYYY">{props.job.date_applied}</Moment>
              : "No Application"}
          </li>
        </div>
      </ul>
      {deleteModal ?
        <DeleteConfirmationModal
          show={toggleDelete}
          hide={hideDelete}
          delete={props.deleteJob}
          id={props.job.id}
        />
        : null}
    </div>
  }

  // jobs Index component
  return (
    <>
      <ul >
        {renderJob()}
      </ul>
      {openModal ?
        <Modal
          handleUpdate={props.handleUpdate}
          job={props.job}
          hide={hide}
          show={openModal}
          showDelete={toggleDelete}
          hideDelete={hideDelete}
          delete={props.deleteJob}
          deleteModal={deleteModal}
        />
        : null}
    </>
  )
}

export default JobCard