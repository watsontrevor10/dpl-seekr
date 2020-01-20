import React, { useState, useEffect, } from "react";
import axios from "axios";
import Task from './Task';
import TaskForm from './TaskForm';

const Tasks = (props) => {
  const [currentTask, setCurrentTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState(false);
  const [completedFilter, setCompletedFilter] = useState(false)
  const key = 0

  // Initial API request for tasks
  useEffect(() => {
    axios.get(`/api/jobs/${props.id}/tasks/`)
      .then(res => {
        setTasks(res.data)
      })
  }, []);

  // Update function
  const handleUpdate = () => {
    axios.get(`/api/jobs/${props.id}/tasks`)
      .then(res => {
        setTasks(res.data);
        setCurrentTask(null);
        setForm(false);
      })
  };

  // Set tasks and toggles form
  const handleEdit = (task) => {
    setCurrentTask(task);
    toggleForm();
  };

  // Delete function
  const handleDelete = (id) => {
    axios.delete(`/api/jobs/${props.id}/tasks/${id}`)
      .then(res => {
        setTasks(tasks.filter(task => task.id !== id))
      })
  };

  // Toggles form
  const handleCancel = () => {
    setForm(false);
    setCurrentTask(null);
  }

  // Toggles form
  const toggleForm = () => {
    setForm(!form);
  };

  const handleFilter = (e) => {
    setCompletedFilter(e.target.value)
    axios.get(`/api/jobs/${props.id}/tasks/`, {
      params: {
        filter: !completedFilter
      }
    })
    .then( res => {
      setTasks(res.data)
    })
  }

  return (
    <>
      <div className="main-notes-container main-tasks">
        <div className="notes-container">
          <h2 className="notes-header">Tasks</h2>
          <button onClick={() => toggleForm()} className="jobinfo-save-btn">
            {form ?
              'Cancel'
              : 'Add'
            }
          </button>
        </div>
        <select
          className="dash-select"
          value={completedFilter}
          onChange={handleFilter}
        >
          <option value={false}>Incomplete</option>
          <option value={true}>Complete</option>
        </select>
        <div className="tasks">
          {
            form ?
              <TaskForm
                job_id={props.id}
                handleUpdate={handleUpdate}
                toggleForm={toggleForm}
                task={currentTask}
                handleCancel={handleCancel}
              />
              :
              <>
                {tasks.map(task => (
                  <Task
                    key={key + 1}
                    task={task}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                ))
                }
              </>
          }
        </div>
      </div>
    </>
  )
};

export default Tasks;