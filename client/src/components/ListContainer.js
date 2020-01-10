import React, { useState, useEffect } from 'react';
import List from "./List"; 
import HomeNav from "./HomeNav"; 
import axios from 'axios'

const ListContainer = () => {

  const [ jobs, setJobs ] = useState([])

  // axios call to get all user jobs
  useEffect( () => {
    axios.get('/api/jobs')
      .then( res => {
        setJobs(res.data);
      })
  }, [])

  const deleteJob = (id) => {
    axios.delete(`/api/jobs/${id}`)
    .then(res => {
      setJobs(jobs.filter(j => j.id !== id))
    })
  }

  const handleUpdate = () => {
    axios.get(`/api/jobs`)
    .then( res => {
        setJobs(res.data);
      })
  };
    // Passing this function into JobForm as a prop
    const addJob = (job) => setJobs([ ...jobs, job, ]);
    
  return(
    <>
      <div className="main-homeNav-container">
        <HomeNav/>
        </div>
        <div className="list-container">
          <div className="list">
            <List name="Wishlist" className="list-component-container" key={1} jobs={jobs} handleUpdate={handleUpdate} deleteJob={deleteJob} add={addJob} />
          </div>
          <div className="list"> 
            <List name="Applied" className="list-component-container" key={2} jobs={jobs} handleUpdate={handleUpdate} deleteJob={deleteJob} add={addJob}/>
          </div>
          <div className="list">
           <List name="Interviewed" className="list-component-container"key={3} jobs={jobs} handleUpdate={handleUpdate} deleteJob={deleteJob} add={addJob}/>
          </div>
          <div className="list">
            <List name="Offer" className="list-component-container" key={4} jobs={jobs} handleUpdate={handleUpdate} deleteJob={deleteJob} add={addJob}/>
          </div>
          <div className="list">
            <List name="Rejected" className="list-component-container" key={5} jobs={jobs} handleUpdate={handleUpdate} deleteJob={deleteJob} add={addJob}/>
          </div>
        </div>
      
    </>
  )
}

export default ListContainer; 