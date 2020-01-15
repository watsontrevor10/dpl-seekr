import React, { useState, useEffect } from 'react';
import { Link, withRouter, } from 'react-router-dom'
import TasksDue from './TasksDue'
import UpcomingInt from './UpcomingInt'
import JobGraph from "./JobGraph"
import ListContainer from './ListContainer';
import axios from "axios";

const Dashboard = (props) => {


  return (
    <>
      <div className="main-dashboard-container">
        <div>
          <div className="board-link">
            <Link to="/board">
              <JobGraph />
            </Link>
          </div>
          <br />
          <br />
          <div className="board-link">
            <TasksDue />
            <br />
            <UpcomingInt />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;