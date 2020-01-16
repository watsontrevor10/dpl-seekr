import React, { useState, } from 'react';

const Interview = (props) => {

  return (
    <>
      <h2>{props.interview.subject}</h2>
      <p>{props.interview.date}</p>
      <p>{props.interview.description}</p>
      <p>{props.interview.interview_type}</p>
      <p>{props.interview.follow_up}</p>
      <button onClick={() => props.handleEdit(props.interview)}>Edit</button>
      <button onClick={() => props.handleDelete(props.interview.id)}> Delete </button>
    </>

  );
};

export default Interview;