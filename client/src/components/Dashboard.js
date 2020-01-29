import React from 'react';
import { Link } from 'react-router-dom'
import TasksDue from './TasksDue'
import UpcomingInt from './UpcomingInt'
import JobGraph from "./JobGraph"
import JobAppsGraph from "./JobAppsGraph"
import HomeNav from "./HomeNav"
import Logo from "../images/Seekr_logo_icon.png"
import LogoText from "../images/Seekr_text.png"

const Dashboard = (props) => {

  return (
    <>
      <div className="main-dashboard-container">
        <div className="main-homeNav-container">
          <HomeNav />
        </div>
        {/* <h1 className="dashboard-heading">Seekr</h1> */}
        <div className="dashboard-heading">
          <img className="main-logo-text" src={LogoText}/>
          <div className="dashboard-img">
            <img className="main-logo-img" src={Logo}/>
          </div>
        </div>
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