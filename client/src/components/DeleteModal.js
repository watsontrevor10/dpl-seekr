import React from 'react';
// import Backdrop from './Backdrop';

const DeleteModal = (props) => {

  return(
    <>
    {/* <Backdrop show={props.show} hide={props.hide} /> */}
    <div className="delete-container">
      <div className="delete-header">
        <h3>Are you sure you would like to delete this Job?</h3>
        <button onClick={() => props.delete(props.id) }>Yes</button>
        <button onClick={() => props.hide()}>No</button>
      </div>
    </div>
    </>
  );
};

export default DeleteModal; 