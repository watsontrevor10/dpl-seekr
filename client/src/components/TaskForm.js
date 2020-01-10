import React, { useEffect, useState, } from 'react';
import axios from "axios";
import useFormInput from '../hooks/useFormInput';

const TaskForm = (props) => {
  const { values, handleChange, handleSubmit, setValues} = useFormInput(submit);
  const { subject, due_date, completed_date, } = values

  useEffect( () => {
    if (props.task) {
      setValues({subject: props.task.subject, due_date: props.task.due_date, completed_date: props.task.completed_date})
    };
  }, [] );

  function submit(){
    const newTask = { due_date, subject, completed_date}
    if (props.task) {
      axios.put(`/api/jobs/${props.task.job_id}/tasks/${props.task.id}`, newTask)
        .then(res => {
          props.handleUpdate();
          setValues({})
        })
      } else {
        axios.post(`/api/jobs/${props.job_id}/tasks/`, newTask)
        .then(res => {
          props.handleUpdate();
          setValues({})
        })
      }
  };

  return(
    <>
      <form onSubmit={handleSubmit}>
        Task: <input type="text" name="subject" onChange={handleChange} value={subject} /> <br />
        Due Date: <input type="date" name="due_date" onChange={handleChange} value={due_date} /> <br />
        Completed Date: <input type="date" name="completed_date" onChange={handleChange} value={completed_date} /> <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
};

export default TaskForm;
