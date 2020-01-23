import React from 'react';

const LoginModal = (props) => {

  // debugger
  return (
    <>
    {/* <Backdrop show={props.show} hide={props.hide} /> */}
    <div className="try-again">
      <div className="delete-header">
        <h3 className="delete-confirmation-text" style={{color: "white"}}>{props.message}</h3>
        <center><button className="modal-yes" style={{color: "white"}} onClick={props.toggleError}>Try Again!</button></center>
      </div>
    </div>
    </>
  );
};

export default LoginModal;