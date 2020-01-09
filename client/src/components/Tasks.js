import React, { useState, useEffect, } from "react";
import axios from "axios";
import useFormInput from '../hooks/useFormInput';
import Task from './Task';

const Tasks = (props) => {
  const [tasks, setTasks] = useState([]);
  const subject = useFormInput();
  const due_date = useFormInput();
  const completed_date = useFormInput()

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

    <form onSubmit={handleSubmit}>
      Task: <input type="text" name="subject" {...subject} /> <br />
        Due Date: <input type="date" name="dueDate" {...due_date} /> <br />
        Completed Date: <input type="date" name="completedDate" {...completed_date} /> <br />
        <input type="submit" value="Submit" />
    </form>

    {tasks.map( task=> (
      <Task task={task} />
      ))
    }
    </>
  )
};

export default Tasks;