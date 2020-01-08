import React from 'react';
import JobViewForm from './JobViewForm';
import Backdrop from './Backdrop';

const Modal = (props) => {
  
 
  return (
    <>
    <Backdrop show={props.show} hide={props.hide} />
      <div 
        className="main-modal-container"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        <JobViewForm id={props.id}/>
      </div>
    </>
  )
}

export default Modal