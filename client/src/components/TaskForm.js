import React, { useEffect, useState, } from 'react';
import axios from "axios";
import useFormInput from '../hooks/useFormInput';

const TaskForm = (props) => {
  const subject = useFormInput();
  const due_date = useFormInput();
  const completed_date = useFormInput()

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { due_date: due_date.value, subject: subject.value, completed_date: completed_date.value}
    axios.post(`/api/jobs/${props.job_id}/tasks/`, newTask)
      .then(res => {
      })
  };

  return(
    <form onSubmit={handleSubmit}>
      Task: <input type="text" name="subject" {...subject} /> <br />
      Due Date: <input type="date" name="dueDate" {...due_date} /> <br />
      Completed Date: <input type="date" name="completedDate" {...completed_date} /> <br />
      <input type="submit" value="Submit" />
    </form>
  )
};

export default TaskForm;
