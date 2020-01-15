import React, { useState } from 'react';
import { Link, withRouter, } from 'react-router-dom'
import TasksDue from './TasksDue'
import UpcomingInt from './UpcomingInt'
import ListContainer from './ListContainer';

const Dashboard = (props) => {

  return (
    <>
      <div className="main-dashboard-container">
        <div className="board-link">
          <Link to='/board'>Board</Link>
        </div>
        <div>
          <TasksDue />
          <br/>
          <UpcomingInt />
        </div>
      </div>
    </>
  )
}

export default Dashboard;