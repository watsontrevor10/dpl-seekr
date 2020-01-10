import React, { useState, useEffect, } from "react"
import axios from "axios"
import Interview from './Interview'
import InterviewForm from './InterviewForm'

const Interviews = (props) => {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    axios.get(`/api/jobs/${props.id}/interviews`)
      .then(res => {
        setInterviews(res.data)
      })
  }, []);

  const handleUpdate = () => {
    axios.get(`/api/jobs/${props.id}/interviews`)
    .then( res => {
        setInterviews(res.data);
      })
  }; 
  return (
    <>
      <h1>Interviews</h1>
      <InterviewForm job_id={props.id} handleUpdate={handleUpdate}/>
      {interviews.map( interview => (
        <Interview interview={interview} handleUpdate={handleUpdate}/>
        ))
      }
    </>
  )
};


export default Interviews