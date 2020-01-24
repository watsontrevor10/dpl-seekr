import React, { useEffect } from 'react';
import axios from "axios";
import useFormInput from '../hooks/useFormInput';

const TaskForm = (props) => {
  const { values, handleChange, handleSubmit, setValues } = useFormInput(submit);
  const { subject, due_date, completed_date, completed} = values

  useEffect(() => {
    if (props.task) {
      setValues({ subject: props.task.subject, due_date: props.task.due_date, completed_date: props.task.completed_date, completed: props.task.completed })
    };
  }, []);

  function submit() {
    if (props.task) {
      const newTask = { due_date, subject, completed_date, completed: props.task.completed, }
      axios.put(`/api/jobs/${props.task.job_id}/tasks/${props.task.id}`, newTask)
      .then(res => {
        props.handleUpdate();
        setValues({})
      })
    } else {
      const newTask = { due_date, subject, completed_date, completed: false, }
      axios.post(`/api/jobs/${props.job_id}/tasks/`, newTask)
        .then(res => {
          props.handleUpdate();
          setValues({})
        })
    }
  };

  return (
    <>
    <div className="block">
      <div className="container">
        <form onSubmit={handleSubmit} className="jobview-form">
        <div className="all-inputs">
          <div className="form-input">
              <h3>Task</h3>
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                value={subject}
              />
            </div>
            <div className="form-input">
              <h3>Due Date</h3>
              <input
                type="date"
                name="due_date"
                onChange={handleChange}
                value={due_date}
              />
            </div>
          </div>
          <button 
            className="jobinfo-save-btn task-save"
            type="submit" value="Submit"
          > 
            Save
          </button>
        </form>
        </div>
      </div>
    </>
  )
};

export default TaskForm;
