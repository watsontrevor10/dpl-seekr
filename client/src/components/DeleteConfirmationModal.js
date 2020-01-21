import React, { useState } from 'react';
import Backdrop from './Backdrop';

const DeleteConfirmationModal = (props) => {

const [doubleConfirmation, setDoubleConfirmation] = useState(false)

const toggleSecondConfirmation = () => {
  setDoubleConfirmation(true)
}

  return(
    <>
    <Backdrop show={props.show} hide={props.hide} />
    <div className="delete-confirmation-container">
      <div className="delete-header">
        <h3>Are you sure you would like to delete this Job?</h3>
        <button onClick={() => toggleSecondConfirmation() }>Yes</button>
        <button onClick={() => props.hide()}>No</button>
      </div>
      <div className="second-confirmation-container">
        {doubleConfirmation ? 
        <>
          <h3 className="delete-header">This will delete the job along with the contents that go with it, <br />are you positive you would like to delete?</h3> 
          <button onClick={() => props.delete(props.id)}>Yes</button>
          <button onClick={() => props.hide()}>No</button>
        </>
        : null }
      </div>
    </div>
    </>
  );
};

export default DeleteConfirmationModal; 