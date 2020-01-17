import React, { useState, } from 'react';

const Interview = (props) => {

  return (
    <>
      <div className="interviews-content">
        <h2>{props.interview.subject}</h2>
        <p>{props.interview.date}</p>
        <p>{props.interview.interview_type}</p>
        <p>{props.interview.description}</p>
        <p>{props.interview.follow_up}</p>
        </div>
          <div className="card-btns-flex">
          <div className="card-btns-div"> 
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
      </div>
    </>

  );
};

export default Interview;

