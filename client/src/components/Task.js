import React, { useState, } from 'react';
import TaskForm from './TaskForm';

const Task = (props) => {

  return (
    <>
      <h2>{props.task.subject}</h2>
      <p>{props.task.due_date}</p>
      <p>{props.task.completed_date}</p>
      <button onClick={() => props.handleEdit(props.task)}>Edit</button>
      <button onClick={() => props.handleDelete(props.task.id)}>Delete</button>
    </>

  );
};

export default Task;