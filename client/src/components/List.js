import React, { useState, useEffect } from 'react';
import Jobs from "./Jobs"; 

const List = (props) => {
  return(
    <h1 className="list-component-container">{props.name}</h1>
  )
}

export default List; 