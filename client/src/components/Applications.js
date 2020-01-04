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

  const renderApps = (props) => {
    return apps.map( app => (
      <div>
        <li key={app.id}>
          {app.company_name}
          {app.job_title}
        </li>
      </div>
    ))
  }
  
  return (
    <div>
      Applications
      <ul>
        { renderApps() }
      </ul>
      <ApplicationForm />
    </div>
  )
}

export default Applications