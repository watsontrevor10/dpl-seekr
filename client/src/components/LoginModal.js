import React from 'react';

const LoginModal = (props) => {

  return (
    <>
    {/* <Backdrop show={props.show} hide={props.hide} /> */}
    <div className="delete-container">
      <div className="delete-header">
        <h3 className="delete-confirmation-text">{props.message}</h3>
        <button className="modal-yes" onClick={props.toggleLoginError}>Ok</button>
      </div>
    </div>
    </>
  );
};

export default LoginModal;