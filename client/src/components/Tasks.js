import React, { useState, useEffect, } from "react";
import axios from "axios";
import Task from './Task';
import TaskForm from './TaskForm';

const Tasks = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect( () => {
    axios.get(`/api/jobs/${props.match.params.job_id}/tasks/`)
    .then(res=>{
        setTasks(res.data)
      })
  }, []);

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