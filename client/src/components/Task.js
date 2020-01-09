import React, { useState, } from 'react';
import TaskForm from './TaskForm';

const Task = (props) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();
  };

  return(
    <>
    {
      edit ?
      <TaskForm task={props.task} />
      :
      <>
        <h2>{props.task.subject}</h2>
        <p>{props.task.due_date}</p>
        <p>{props.task.completed_date}</p>
      </> 
    }
      <button onClick={ () => setEdit(!edit)}>Edit</button>
    </>
    
  );
};

export default Task;