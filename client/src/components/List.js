import React, { useState, } from 'react';
import NewJobModal from "./NewJobModal";
import JobCard from "./JobCard";

const List = (props) => {

  const [openModal, setOpenModal] = useState(false)

  const show = () => {
    setOpenModal(true);
  }
  const hide = () => {
    setOpenModal(!openModal);
  }

  const renderJobs = (name) => {
    return props.jobs.map(job => {
      if (name === job.status) {
        return (
          <>
            <div
              key={job.id}
              company={job.company_name}
              title={job.job_title}
              status={job.status}
              className={`job-card ${job.id}`}
            >
              <JobCard 
                handleUpdate={props.handleUpdate} 
                deleteJob={props.deleteJob} 
                job={job} 
                name={name}
              />
            </div>
          </>
        )
      }
      return (
        <></>
      )
    })
  }

  return (
    <>
      <div className="list-component-container">
        <h3 className="list-header">
          {props.name}
        </h3>
        <button 
          className="new-job-btn" 
          onClick={show}>
            Add Job
          </button>
        {openModal ? 
          <NewJobModal 
            add={props.add} 
            hide={hide} 
            show={openModal} 
            name={props.name}
          /> 
          : null}
        {renderJobs(props.name)}
      </div>
    </>
  )
}
export default List;
