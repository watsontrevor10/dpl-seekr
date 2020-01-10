import React, { useState, useEffect, } from "react";
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
      <form onSubmit={handleSubmit}>
        Interview: <input type="text" name="subject" onChange={handleChange} value={subject} />
        <br />
        Date: <input type="date" name="date" onChange={handleChange} value={date} />
        <br />
        Description: <textarea name="description" onChange={handleChange} value={description} />
        <br />
        Type: <input type="text" name="interview_type" onChange={handleChange} value={interview_type} />
        <br />
        Followed Up: <input type="checkbox" name="follow_up" onChange={handleCheckBox} value={follow_up} />
        <br />
        <button type="submit">
          Submit
        </button>
      </form>
    </>
  )
};

export default InterviewForm