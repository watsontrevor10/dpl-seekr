import React from 'react';
import { Link } from 'react-router-dom'
import TasksDue from './TasksDue'
import UpcomingInt from './UpcomingInt'
import JobGraph from "./JobGraph"
import JobAppsGraph from "./JobAppsGraph"
import HomeNav from "./HomeNav";

const Dashboard = (props) => {

  return (
    <>
      <div className="main-dashboard-container">
        <div className="main-homeNav-container">
          <HomeNav />
        </div>
        <h1 className="dashboard-heading">SEEKER</h1>
        <div className="dashboard-container">
          <div className="board-link">
            <Link to="/board">
              <JobGraph />
            </Link>
            <Link to="/board">
              <JobAppsGraph />
            </Link>
          </div>
          <div className="board-link">
            <TasksDue />
            <UpcomingInt />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;