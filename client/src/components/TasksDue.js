// import React, { useState, useEffect, useCallback } from 'react'
// import axios from 'axios'

// const TasksDue = () => {
//   const [tasks, setTasks] = useState([])
//   const [dueDate, setDueDate] = useState('')
//   const memoizedDueDate = useCallback(() => {

//   })

//   useEffect(() => {
//     axios.post('/api/tasks/tasks_due')
//       .then(res => {
//         setTasks(res.data)
//       })
//   }, [])

//   const handleChange = (e) => {
//     setDueDate(e.target.value)
//     test()
//   }

//   // const handleChange = useCallback( (e) => {
//   //   const asyncfunc = async () => {setDueDate(e.target.value)
//   // }, [dueDate]});

//   const test = () => {
//     axios.post('/api/tasks/tasks_due', { filter_date: dueDate })
//       .then(res => {
//         setTasks(res.data)
//       })
//   }


//   return (
//     <>
//       <h2>Tasks Due</h2>
//       <br />
//       <select value={dueDate} onChange={handleChange}>
//         <option value='1'>Today</option>
//         <option value='7'>7 Days</option>
//         <option value='14'>14 Days</option>
//         <option value='30'>30 Days</option>
//       </select>
//       <table>
//         <tr>
//           <th>Subject</th>
//           <th>Due Date</th>
//           <th>Company</th>
//           <th>Status</th>
//         </tr>
//         {tasks.map((task) =>
//           <tr>
//             <td>{task.subject}</td>
//             <td>{task.due_date}</td>
//             <td>{task.company_name}</td>
//             <td>{task.status}</td>
//           </tr>
//         )}
//       </table>
//     </>
//   )
// }

// export default TasksDue