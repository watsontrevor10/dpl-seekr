import React from 'react';

const Task = (props) => {
  return(
    <>
      <h2>{props.task.subject}</h2>
      <p>{props.task.due_date}</p>
      <p>{props.task.completed_date}</p>
    </>
    
  );
};

export default Task;