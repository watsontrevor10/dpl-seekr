import React, { useState, } from 'react';
import InterviewForm from './InterviewForm';

const Interview = (props) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();
  };

  return(
    <> 
    {
      edit ?
      <InterviewForm interview={props.interview} handleUpdate={props.handleUpdate} />
      :
      <>
        <h2>{props.interview.subject}</h2>
        <p>{props.interview.date}</p>
        <p>{props.interview.description}</p>
        <p>{props.interview.interview_type}</p>
        <p>{props.interview.follow_up}</p>
      </> 
    }
      <button onClick={ () => setEdit(!edit)}>Edit</button>
      <button onClick={ () => props.handleDelete(props.interview.id)}> Delete </button>
    </>
    
  );
};

export default Interview;