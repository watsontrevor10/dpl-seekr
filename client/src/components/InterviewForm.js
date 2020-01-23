import React, { useEffect, } from "react";
import axios from "axios";
import useFormInput from '../hooks/useFormInput'

const InterviewForm = props => {
  const { values, handleSubmit, handleChange, handleCheckBox, setValues, } = useFormInput(submit)
  const { follow_up, subject, date, description, interview_type, } = values

  useEffect(() => {
    if (props.interview) {
      setValues({
        subject: props.interview.subject,
        date: props.interview.date,
        follow_up: props.interview.follow_up,
        description: props.interview.description,
        interview_type: props.interview.interview_type
      })
    };
  }, []);

  function submit() {
    const newInterview = { subject, date, follow_up, description, interview_type }
    if (props.interview) {
      axios.put(`/api/jobs/${props.interview.job_id}/interviews/${props.interview.id}`, newInterview)
        .then(res => {
          props.handleUpdate();
          setValues({})
        })
    } else {
      axios.post(`/api/jobs/${props.job_id}/interviews/`, newInterview)
        .then(res => {
          props.handleUpdate();
          setValues({})
        })
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="jobview-form">
      <div className="all-inputs interview-input">
        <div className="form-input">
          <h3>Subject</h3>
          <input type="text" name="subject" onChange={handleChange} value={subject} />
        </div>
        <div className="form-input">
          <h3>Date</h3> 
          <input type="date" name="date" onChange={handleChange} value={date} />
        </div>
        <div className="form-input">
          <h3>Description</h3>
          <textarea name="description" onChange={handleChange} value={description} />
        </div>
        <div className="form-input">
          <h3>Type</h3>
          <input type="text" name="interview_type" onChange={handleChange} value={interview_type} />
        </div>
        <div className="form-input">
          <h3>Followed Up</h3>
          <input type="checkbox" name="follow_up" onChange={handleCheckBox} value={follow_up} />
        </div>
        <div className="btns">
          <button 
            className="jobinfo-save-btn"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
      </form>
    </>
  )
};

export default InterviewForm