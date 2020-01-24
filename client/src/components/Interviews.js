import React, { useState, useEffect, } from "react"
import axios from "axios"
import Interview from './Interview'
import InterviewForm from './InterviewForm'

const Interviews = (props) => {
  const [currentInterview, setCurrentInterview] = useState(null);
  const [interviews, setInterviews] = useState([]);
  const [form, setForm] = useState(false);
     // State for toggling delete confirmation modal 

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
    <div className="main-form-container">
      <div className="block">
        <div className="notes-container">
          <h2 className="form-heading">Interviews</h2>
          <div className="btn-toggle" onClick={toggleForm}
            >
            { form ?
              <button className="jobinfo-save-btn">Cancel</button>
              : 
              <svg className="add-btn" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path d="M16 10c0 0.553-0.048 1-0.601 1h-4.399v4.399c0 0.552-0.447 0.601-1 0.601s-1-0.049-1-0.601v-4.399h-4.399c-0.552 0-0.601-0.447-0.601-1s0.049-1 0.601-1h4.399v-4.399c0-0.553 0.447-0.601 1-0.601s1 0.048 1 0.601v4.399h4.399c0.553 0 0.601 0.447 0.601 1z"></path>
              </svg>
            }
          </div>
        </div>
      </div>
        {
          form ?
          <>
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
                      />
                  </div>
                )}
                </div>
              </div>
            </>
        }
      </div>
    </>
  )
};

export default Interviews