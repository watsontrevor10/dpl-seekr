import React from 'react';
import JobForm from './JobForm';
import Backdrop from './Backdrop';

const NewJobModal = (props) => {
  const { add, show, hide, name } = props

  return (
    <>
      <Backdrop show={show} hide={hide} />
      <JobForm add={add} hide={hide} name={name} />
    </>
  )
}

export default NewJobModal