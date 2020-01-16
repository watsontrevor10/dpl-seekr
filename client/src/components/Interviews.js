import React, { useState, useEffect, } from "react"
import axios from "axios"
import Interview from './Interview'
import InterviewForm from './InterviewForm'

const Interviews = (props) => {
  const [currentInterview, setCurrentInterview] = useState(null);
  const [interviews, setInterviews] = useState([]);
  const [form, setForm] = useState(false);

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
      <h2 className="form-heading">Interviews</h2>
      {
        form ? 
        <InterviewForm job_id={props.id} handleUpdate={handleUpdate} toggleForm={toggleForm} interview={currentInterview} handleCancel={handleCancel} />
        :
        <>
          <button onClick={toggleForm}>Add</button>
          {interviews.map(interview => (
            <Interview interview={interview} handleUpdate={handleUpdate} handleDelete={handleDelete} handleEdit={handleEdit} />
          ))
          }
        </>
      }
    </>
  )
};


export default Interviews