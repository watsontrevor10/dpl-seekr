import React from 'react';
// import Backdrop from './Backdrop';

const DeleteModal = (props) => {

  return(
    <>
    {/* <Backdrop show={props.show} hide={props.hide} /> */}
    <div className="delete-container">
      <div className="delete-header">
        <h3 className="delete-confirmation-text">Are you sure you would like to delete this?</h3>
        <button className="modal-yes" onClick={() => props.hide()}>No</button>
        <button className="modal-info-delete-btn" onClick={() => props.delete(props.id) }>Delete</button>
      </div>
    </div>
    </>
  );
};

export default DeleteModal; 