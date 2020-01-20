import React, { useState, useEffect, } from "react";
import axios from "axios";
import Task from './Task';
import TaskForm from './TaskForm';

const Tasks = (props) => {
  const [currentTask, setCurrentTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState(false);
  const key = 0

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
        setCurrentTask(null);
        setForm(false);
      })
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
    toggleForm();
  };

  const handleDelete = (id) => {
    axios.delete(`/api/jobs/${props.id}/tasks/${id}`)
      .then(res => {
        setTasks(tasks.filter(task => task.id !== id))
      })
  };

  const handleCancel = () => {
    setForm(false);
    setCurrentTask(null);
  }

  const toggleForm = () => {
    setForm(!form);
  };

  return (
    <>
      <h2 className="form-heading">Tasks</h2>
      {
        form ?
          <TaskForm job_id={props.id} handleUpdate={handleUpdate} toggleForm={toggleForm} task={currentTask} handleCancel={handleCancel} />
          :
          <>
            <button onClick={toggleForm}>Add</button>
            {tasks.map(task => (
              <Task key={key + 1} task={task} handleUpdate={handleUpdate} handleDelete={handleDelete} handleEdit={handleEdit} />
            ))
            }
          </>
      }
    </>
  )
};

export default Tasks;