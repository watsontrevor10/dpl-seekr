import React, { useState, useEffect, } from "react";
import axios from "axios";
import Task from './Task';
import TaskForm from './TaskForm';

const Tasks = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect( () => {
    axios.get(`/api/jobs/${props.id}/tasks/`)
    .then(res=>{
        setTasks(res.data)
      })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { due_date: due_date.value, subject: subject.value, completed_date: completed_date.value}
    debugger
    axios.post(`/api/jobs/${props.id}/tasks/`, newTask)
      .then(res => {
      })
  };

  return(
    <>
      <h1>Tasks</h1>
      <TaskForm job_id={props.match.params.job_id}/>
      {tasks.map( task=> (
        <Task task={task} />
        ))
      }
    </>
  )
};

export default Tasks;