import React from 'react';
import JobViewForm from './JobViewForm';
import {Link} from 'react-router-dom'

const Modal = (props) => {
 
  return (
    <>
      <div 
        className="main-modal-container"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        <Link to={`/jobs/${props.id}`}>
          <h3>Info Form</h3>
        </Link>
      </div>
    </>
  )
}

export default Modal