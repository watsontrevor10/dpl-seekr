import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobForm from '../components/JobForm';
import { Link } from 'react-router-dom';


const Jobs = (props) => {
  return(
  <h1> </h1>
  )
  }
//   // State for looping through users jobs
//   const [ jobs, setJobs ] = useState([])
//   const [ toggleForm, setToggleForm] = useState(false)
  
//   // axios call to get all user jobs
//   useEffect( () => {
//     axios.get('/api/jobs')
//       .then( res => {
//         setJobs(res.data);
//       })
//   }, [])

//   const toggle = () => {
//     setToggleForm(!toggleForm);
//   }

//   // Rendering the loop of the jobs
//   const renderJobs = () => {
//     return jobs.map( job => (
//       <Link to={`/job/${job.id}`}>
//         <div key={job.id}>
//             <div>
//             {job.company_name} 
//             <br/>
//             {job.job_title}
//             <br />
//             {job.status}
//             <br />
//             </div>
//         </div>
//       </Link>
//     ))
//   }

//   // Passing this function into JobForm as a prop
//   const addJob = (job) => setJobs([ ...jobs, job, ]);
  
//   // jobs Index component
//   return (
//     <div>
//       Jobs
//       <ul>
//         { renderJobs() }
//       </ul>
//       <button onClick={toggle}>Form</button>
//       { toggleForm ? <JobForm toggle={toggle} add={addJob} /> : null }
//     </div>
//   )
// }



export default Jobs