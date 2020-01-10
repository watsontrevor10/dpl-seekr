import React from 'react'

const Backdrop = (props) => {
  return(
    props.show ? <div className="backdrop" onClick={props.hide}></div> : null
  )
}
export default Backdrop;