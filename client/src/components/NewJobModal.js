import React from 'react';
import JobForm from './JobForm';
import Backdrop from './Backdrop';

const NewJobModal = (props) => {
  const { add, show, hide } = props

  return (
    <>
      <Backdrop show={show} hide={hide} />
      <JobForm add={add} hide={hide} />
    </>
  )
}

export default NewJobModal