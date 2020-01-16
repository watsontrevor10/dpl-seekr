import React, { useState, } from 'react';

const Interview = (props) => {

  return (
    <>
      <div className="interviews-content">
        <h2>{props.interview.subject}</h2>
        <p>{props.interview.date}</p>
        <hr/>
        <br/>
        <p>{props.interview.interview_type}</p>
        <br/>
        <p>{props.interview.description}</p>
        <br/>
        <p>{props.interview.follow_up}</p>
        <button
          className="interviews-add-btn"
          onClick={() => props.handleEdit(props.interview)}
        >
          Edit
        </button>
        <button
          className="interviews-add-btn"
          onClick={() => props.handleDelete(props.interview.id)}
        >
          Delete
        </button>
      </div>
    </>

  );
};

export default Interview;