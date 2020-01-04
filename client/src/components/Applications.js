import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ApplicationForm from '../components/ApplicationForm'



const Applications = (props) => {
  const [ apps, setApps ] = useState([])
  
  useEffect( () => {
    axios.get('/api/applications')
      .then( res => {
        setApps(res.data);
      })
  }, [])

  const renderApps = () => {
    return apps.map( app => (
      <div key={app.id}>
        <li >
          {app.company_name}
          {app.job_title}
        </li>
      </div>
    ))
  }

  const addApp = (app) => setApps([ ...apps, app, ]);
  
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