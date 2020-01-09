import React, { useState, useEffect, } from "react";
import axios from "axios";
import useFormInput from '../hooks/useFormInput'

const Interviews = props => {
  const { values, handleSubmit, handleChange, handleCheckBox, setValues, } = useFormInput(submit)
  const { follow_up, subject, date, description, interview_type, } = values
  const [interviews, setInterviews] = useState([]);

useEffect(() => {
  axios.get(`/api/jobs/${props.match.params.job_id}/interviews`)
    .then(res => {
      setInterviews(res.data)
    })
}, []);

function submit() {
  axios.post(`/api/jobs/${props.match.params.job_id}/interviews`,
    { subject, date, follow_up, description, interview_type, })
    .then(res => {
      setInterviews([...interviews, res.data])
      setValues({})
    })
};

return (
  <>
    <h1>Interviews</h1>

    <form onSubmit={handleSubmit}>
      Interview: <input type="text" name="subject" onChange={handleChange} value={subject} />
      <br />
      Date: <input type="date" name="date" onChange={handleChange} value={date} />
      <br />
      Followed Up: <input type="checkbox" name="follow_up" onChange={handleCheckBox} value={follow_up} />
      <br />
      Description: <textarea name="description" onChange={handleChange} value={description} />
      <br />
      Type: <input type="text" name="interview_type" onChange={handleChange} value={interview_type} />
      <br />
      <button type="submit">
        Submit
        </button>
    </form>

    {interviews.map((interview, i) => (

      <h2 key={i}>
        {interview.subject}
      </h2>

    ))}
  </>
)
};


export default Interviews