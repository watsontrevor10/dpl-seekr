import React, { useState, useEffect } from "react";
import axios from "axios";
import Task from './Task';
import TaskForm from './TaskForm';
import DeleteModal from "./DeleteModal";

const Tasks = (props) => {
  const [currentTask, setCurrentTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState(false);
  const [completedFilter, setCompletedFilter] = useState("false")
  // const key = 0
  const [deleteModal, setDeleteModal] = useState(false)

  const toggleDelete = () => {
    setDeleteModal(true)
  }
  const hideDelete = () => {
    setDeleteModal(!deleteModal)
  }

  // Initial API request for tasks
  useEffect(() => {
    axios.get(`/api/jobs/${props.id}/tasks/`)
      .then(res => {
        setTasks(res.data)
      })
  }, []);

  // Update function, triggered from Task component
  const handleUpdate = () => {
    axios.get(`/api/jobs/${props.id}/tasks`)
      .then(res => {
        setTasks(res.data);
        setCurrentTask(null);
        setForm(false);
      })
  };

  // filters task results by complete/incomplete dropdown
  const handleFilter = (e) => {
    setCompletedFilter(e.target.value)
    axios.get(`/api/jobs/${props.id}/tasks/`, {
      params: {
        filter: completedFilter
      }
    })
      .then(res => {
        setTasks(res.data)
      })
  }

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

  return (
    <>
      <div className="main-notes-container main-tasks">
        <div className="notes-container">
          <h2 className="form-heading">Tasks</h2>
          <div className="btn-toggle" onClick={toggleForm}
            >
            { form ?
              <button className="jobinfo-save-btn">Cancel</button>
              : 
              <svg className="add-btn" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path d="M16 10c0 0.553-0.048 1-0.601 1h-4.399v4.399c0 0.552-0.447 0.601-1 0.601s-1-0.049-1-0.601v-4.399h-4.399c-0.552 0-0.601-0.447-0.601-1s0.049-1 0.601-1h4.399v-4.399c0-0.553 0.447-0.601 1-0.601s1 0.048 1 0.601v4.399h4.399c0.553 0 0.601 0.447 0.601 1z"></path>
              </svg>
            }
          </div>
        </div>
        <select
          className="dash-select"
          value={completedFilter}
          onChange={handleFilter}
        >
          <option value="false">Incomplete</option>
          <option value="true">Complete</option>
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
                    key={task.id}
                    task={task}
                    handleUpdate={handleUpdate}
                    handleFilter={handleFilter}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    filter={completedFilter}
                    show={toggleDelete}
                    hide={hideDelete}
                    deleteModal={deleteModal}
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