import React, { useState, useEffect, } from 'react';
import axios from "axios";

const Task = (props) => {
  const {due_date, subject, completed_date, completed} = props.task

  useEffect( () => {
    console.log(completed)
  },[])
  
  const handleChange = (e) => {
    e.preventDefault();
    handleCompleted();
  }
  
  const handleCompleted = () => {
    const newTask = { due_date, subject, completed_date, completed: !completed }
    axios.put(`/api/jobs/${props.task.job_id}/tasks/${props.task.id}`, newTask)
    .then(res => {
      props.handleUpdate();
      
    })
  }

  return (
    <>
      <div className="task">
        <input type="checkbox" name="completed" onChange={handleCompleted} checked={props.task.completed}/>
          <div className={ props.task.completed ? "true" : "false"}>
            <p>{props.task.subject}</p>
            <p>{props.task.due_date}</p>
          <button onClick={() => props.handleEdit(props.task)}>Edit</button>
          <button onClick={() => props.handleDelete(props.task.id)}>Delete</button>
        </div>
      </div>
    </>

  );
};

export default Task;