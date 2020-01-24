import React, { useState } from 'react';
import axios from "axios";
import DeleteModal from "./DeleteModal";

const Task = (props) => {
  const { due_date, subject, completed_date, completed } = props.task
  const [deleteModal, setDeleteModal] = useState(false)

  const toggleDelete = () => {
    setDeleteModal(true)
  }
  const hideDelete = () => {
    setDeleteModal(!deleteModal)
  }

  // Marks tasks as completed
  const handleCompleted = () => {
    const newTask = { due_date, subject, completed_date, completed: !completed }

    axios.put(`/api/jobs/${props.task.job_id}/tasks/${props.task.id}`, newTask)
      .then(res => {
        // function exists on Tasks.js
        props.handleUpdate();
      })
  }

  return (
    <>
      <div className="task">
        <div className="modal-task-content">
          <input
            type="checkbox"
            name="completed"
            onChange={handleCompleted}
            checked={completed}
          />
          <div className={props.task.completed ? "true" : "false"}>
            <p>{props.task.subject}</p>
            <p>{props.task.due_date}</p>
          </div>
        </div>
        <div className="task-btns-container">
          <button
            className="edit-btn"
            onClick={() => props.handleEdit(props.task)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-edit"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7">
              </path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z">
              </path>
            </svg>
          </button>
          <button
            className="modal-info-delete-btn"
            onClick={() => toggleDelete()}
          >
            Delete
          </button>
        </div>
        {deleteModal ?
          <DeleteModal
            show={toggleDelete}
            hide={hideDelete}
            delete={props.handleDelete}
            id={props.task.id}
          />
          : null}
      </div>
    </>

  );
};



export default Task;