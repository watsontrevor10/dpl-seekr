import React, { useState, useEffect, } from "react";
import axios from "axios";
import Task from './Task';
import TaskForm from './TaskForm';

const Tasks = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`/api/jobs/${props.id}/tasks/`)
      .then(res => {
        setTasks(res.data)
      })
  }, []);

  const handleUpdate = () => {
    axios.get(`/api/jobs/${props.id}/tasks`)
      .then(res => {
        setTasks(res.data);
      })
  };

  const handleDelete = (id) => {
    axios.delete(`/api/jobs/${props.id}/tasks/${id}`)
      .then(res => {
        setTasks(tasks.filter(task => task.id !== id))
      })
  };

  return (
    <>
      <h2 className="form-heading">Tasks</h2>
      <TaskForm job_id={props.id} handleUpdate={handleUpdate} />
      {tasks.map(task => (
        <Task task={task} handleUpdate={handleUpdate} handleDelete={handleDelete} />
      ))
      }
    </>
  )
};

export default Tasks;