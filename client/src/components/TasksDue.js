import React, { useState, useEffect, } from 'react'
import axios from 'axios'

const TasksDue = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    axios.get('/api/tasks/tasks_due')
      .then(res => {
        setTasks(res.data)
      })
  }, [])

  return (
    <>
      <h2>Tasks Due</h2>
      <br />
      <table>
        <tr>
          <th>Subject</th>
          <th>Due Date</th>
          <th>Company</th>
          <th>Status</th>
        </tr>
        {tasks.map((task) =>
          <tr>
            <td>{task.subject}</td>
            <td>{task.due_date}</td>
            <td>{task.company_name}</td>
            <td>{task.status}</td>
          </tr>
        )}
      </table>
    </>
  )
}

export default TasksDue