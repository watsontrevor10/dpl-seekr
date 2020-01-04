import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ApplicationForm from '../components/ApplicationForm'



const Applications = (props) => {
  // State for looping through users applications
  const [ apps, setApps ] = useState([])
  
  // axios call to get all user applications
  useEffect( () => {
    axios.get('/api/applications')
      .then( res => {
        setApps(res.data);
      })
  }, [])

  // Rendering the loop of the applications
  const renderApps = () => {
    return apps.map( app => (
      <div key={app.id}>
        <li >
          {app.company_name} 
          <br/>
          {app.job_title}
        </li>
      </div>
    ))
  }

  // Passing this function into ApplicationForm as a prop
  const addApp = (app) => setApps([ ...apps, app, ]);
  
  // Applications Index component
  return (
    <div>
      Applications
      <ul>
        { renderApps() }
      </ul>
      <ApplicationForm add={addApp} />
    </div>
  )
}

export default Applications