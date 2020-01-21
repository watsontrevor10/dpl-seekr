import React, { useState } from 'react';
import Backdrop from './Backdrop';

const DeleteConfirmationModal = (props) => {

const [doubleConfirmation, setDoubleConfirmation] = useState(false)
const [confirm, setConfirm] = useState(true)

const toggleSecondConfirmation = () => {
  setDoubleConfirmation(true)
  setConfirm(false)
}

  return(
    <>
    <Backdrop show={props.show} hide={props.hide} />
    <div className="delete-confirmation-container">
      { confirm ?
      <div className="delete-header">
        <h3>Are you sure you would like to delete this Job?</h3>
        <button className="modal-yes" onClick={() => props.hide()}>No</button>
        <button className="modal-info-delete-btn" onClick={() => toggleSecondConfirmation() }>Delete</button>
      </div>
      :
      <div className="delete-confirmation-container">
        {doubleConfirmation ? 
        <div className="delete-header">
          <h3>This will delete the job along with the contents that go with it, are you positive you would like to delete?</h3> 
          <button className="modal-yes" onClick={() => props.hide()}>No</button>
          <button className="modal-info-delete-btn" onClick={() => props.delete(props.id)}>Delete</button>
        </div>
        : null }
      </div>
      }
    </div>
    </>
  );
};

// This will delete the job along with the contents that go with it, are you positive you would like to delete?

export default DeleteConfirmationModal; 