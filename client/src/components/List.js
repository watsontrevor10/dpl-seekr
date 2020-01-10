import React, { useState, } from 'react';
import NewJobModal from "./NewJobModal";
import JobCard from "./JobCard";

const List = (props) => {

  const [ openModal, setOpenModal ] = useState(false)

  const show = () => {
    setOpenModal(true);
  }
  const hide = () => {
    setOpenModal(!openModal);
  }

    const renderJobs = (name) => {
      return props.jobs.map( job => {
        if ( name === job.status ) {
          return (
          <>
            <div
            key={job.id}
            className="job-card"
            company={job.company_name}
            title={job.job_title}
            status={job.status}
            >
              <JobCard handleUpdate={props.handleUpdate} deleteJob={props.deleteJob} job={job}/>
            </div>
          </>
        )}
        return (
          <></>
        )
      })
    }
  
  return (
    <>
    <div className="list-component-container">
      <h1 className="list-header">{props.name}</h1>
        <button className="new-job-btn" onClick={show}>Add Job</button>
        {/* { toggleForm ? <JobForm toggle={toggle} add={addJob} /> : null } */}
        { openModal ? <NewJobModal add={props.add} hide={hide} show={openModal}/> : null }
        { renderJobs(props.name) }
    </div>
    </>
  )
}
export default List;