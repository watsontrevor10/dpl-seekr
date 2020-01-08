import React, { useState, useEffect, } from "react";
import axios from "axios";
import useFormInput from '../hooks/useFormInput';

const Tasks = (props) => {
  const [tasks, setTasks] = useState([]);
  const subject=useFormInput("");
  const dueDate=useFormInput(null)
  const completedDate=useFormInput(null)

  useEffect( () => {
    axios.get(`/api/jobs/${props.match.params.job_id}/tasks/`)
    .then(res=>{
        setTasks(res.data)
      })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/jobs/${props.match.params.job_id}/tasks`, {subject: subject.value, dueDate: dueDate.value, completedDate:completedDate.value})
      .then(res => {

      })
  };

  return(
    <>
    <h1>Tasks</h1>

    <form onSubmit={handleSubmit}>
      Task: <input type="text" name="subject" {...subject} /> <br />
        Due Date: <input type="date" name="due_date" {...dueDate} /> <br />
        Completed Date: <input type="date" name="completed_date" {...completedDate} /> <br />
        <input type="submit" value="Submit" />
    </form>

    {tasks.map( task=> (

      <h2>
        {task.subject}
      </h2>

    ))}
    </>
  )
};

export default Tasks;