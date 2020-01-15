import React, { useState, } from 'react';
import TaskForm from './TaskForm';

const Task = (props) => {
  const [edit, setEdit] = useState(false);

  return (
    <>
      {
        edit ?
          <TaskForm task={props.task} handleUpdate={props.handleUpdate} />
          :
          <>
            <h2>{props.task.subject}</h2>
            <p>{props.task.due_date}</p>
            <p>{props.task.completed_date}</p>
          </>
      }
      <button onClick={() => setEdit(!edit)}>Edit</button>
      <button onClick={() => props.handleDelete(props.task.id)}>Delete</button>
    </>

  );
};

export default Task;