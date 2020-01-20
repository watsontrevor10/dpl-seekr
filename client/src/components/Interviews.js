import React, { useState, useEffect, } from "react"
import axios from "axios"
import Interview from './Interview'
import InterviewForm from './InterviewForm'

const Interviews = (props) => {
  const [currentInterview, setCurrentInterview] = useState(null);
  const [interviews, setInterviews] = useState([]);
  const [form, setForm] = useState(false);
     // State for toggling delete confirmation modal 
     const [deleteModal, setDeleteModal] = useState(false)

     const toggleDelete = () => {
      setDeleteModal(true)
    }
    const hideDelete = () => {
      setDeleteModal(!deleteModal)
    }

  useEffect(() => {
    axios.get(`/api/jobs/${props.id}/interviews`)
      .then(res => {
        setInterviews(res.data)
      })
  }, []);

  const handleUpdate = () => {
    axios.get(`/api/jobs/${props.id}/interviews`)
      .then(res => {
        setInterviews(res.data);
        setCurrentInterview(null);
        setForm(false);
      })
  };

  const handleEdit = (interview) => {
    setCurrentInterview(interview);
    toggleForm();
  };

  const handleDelete = (id) => {
    axios.delete(`/api/jobs/${props.id}/interviews/${id}`)
      .then(res => {
        setInterviews(interviews.filter(interview => interview.id !== id))
        hideDelete()
      })
  }

  const handleCancel = () => {
    setForm(false);
    setCurrentInterview(null);
  }

  const toggleForm = () => {
    setForm(!form);
  };

  return (
    <>
      {
        form ?
        <>
          <h2 className="form-heading">Interviews</h2>
          <InterviewForm
          job_id={props.id}
          handleUpdate={handleUpdate}
          toggleForm={toggleForm}
          interview={currentInterview}
          handleCancel={handleCancel}
          />
        </>
        :
        <>
        <div className="main-notes-container">
        <div className="notes-container">
          <h2 className="form-heading">Interviews</h2>
            <button
              className="jobinfo-save-btn"
              onClick={toggleForm}
              >
              Add
            </button>
          </div>
          <div className="interview-cards-container">
            <div className="interview-card-container">
              {interviews.map(interview =>
                <div className="interviews-card">
                  <Interview
                    interview={interview}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    hide={hideDelete}
                    show={toggleDelete}
                    deleteModal={deleteModal}
                    />
                </div>
              )}
              </div>
            </div>
            </div>
          </>
      }
    </>
  )
};

export default Interviews