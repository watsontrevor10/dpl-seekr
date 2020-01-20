import React, { useState } from 'react';
import Backdrop from './Backdrop';
import Profile from './Profile';

const ProfileModal = (props) => {

  return (
    <>
      <Backdrop show={props.show} hide={props.hide} />
      <Profile />
    </>
  )
}

export default ProfileModal