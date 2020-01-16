import React from 'react'
import axios from 'axios'
import { Link, withRouter, } from 'react-router-dom'

class TaskClass extends React.Component {
  state = { interviews: [], dueDate: '7' }

  componentDidMount() {
    axios.post('/api/interviews/upcoming_interviews', { filter_date: this.state.dueDate })
      .then(res => {
        this.setState({ interviews: res.data })
      })
  }

  random = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor
  }

  handleChange = (e) => {
    this.setState({ dueDate: e.target.value }, () => {
      this.updateInterviews()
    });
  }

  updateInterviews = () => {
    axios.post('/api/interviews/upcoming_interviews', { filter_date: this.state.dueDate })
      .then(res => {
        this.setState({ interviews: res.data })
      })
  }

  render() {
    const { dueDate, interviews, } = this.state
    
    return (
      <>
      <div className="task-container">
        <div className="heading-container">
          <h2>Interviews Due</h2>
            <select onChange={this.handleChange} value={dueDate}>
              <option value='1'>Today</option>
              <option value='7'>7 Days</option>
            </select>
        </div>
        <hr />
        <Link to="/board" style={{textDecoration: "none"}}>
            <div className="task-card-container">
              {interviews.map((interview) =>
              <div className="task-card" style={{backgroundColor: `${this.random()}`}}>
                <div className="task-content" key={interview.id}>
                  <h3>{interview.job_title}</h3>
                  <p>{interview.subject}</p>
                  <p>{interview.date}</p>
                  <p>{interview.company_name}</p>
                </div>
              </div>
              )}
            </div>
          </Link>
        </div>
      </>
    )
  }
}

const colors = [
  "#2d3a66",
  "#070059",
  "#3d1a68",
  "#5e2d5e",
];

export default TaskClass