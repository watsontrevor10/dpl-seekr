import React from 'react';
import JobViewForm from './JobViewForm';
import {Link} from 'react-router-dom'

const Modal = (props) => {
 
  return (
    <>
      <div>
        <Link to={`/jobs/${props.id}`}>
          <h3>Link</h3>
        </Link>
      </div>
    </>
  )
}

export default Modal