import React from 'react'
import axios from 'axios'
import { Link, withRouter, } from 'react-router-dom'

class TaskClass extends React.Component {
  state = { tasks: [], dueDate: '1' }

  // Initial request for tasks
  componentDidMount() {
    axios.post('/api/tasks/tasks_due', { filter_date: this.state.dueDate })
      .then(res => {
        this.setState({ tasks: res.data })
      })
  }

  // randomizes color used for card background
  random = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor
  }

  // filters the tasks by date (1 or 7 days)
  handleChange = (e) => {
    this.setState({ dueDate: e.target.value }, () => {
      this.updateTasks()
    });
  }

  // Separated this from handleChange to ensure that state was set before axios gets new array
  updateTasks = () => {
    axios.post('/api/tasks/tasks_due', { filter_date: this.state.dueDate })
      .then(res => {
        this.setState({ tasks: res.data })
      })
  }

  render() {
    const { dueDate, tasks, } = this.state

    return (
      <>
        <div className="task-container">
          <div className="heading-container">
            <h2>Tasks Due</h2>
            <select 
              className="dash-select"
              onChange={this.handleChange} 
              value={dueDate}
            >
              <option value='1'>Today</option>
              <option value='7'>7 Days</option>
            </select>
          </div>
          <Link 
            to="/board" 
            style={{ textDecoration: "none" }}
          >
            <div className="task-card-container">
              {tasks.map((task) =>
                <>
                  <div 
                    className="task-card" 
                    style={{ backgroundColor: `${this.random()}` }}
                  >
                    <div className="task-content" key={task.id}>
                      <h3>{task.subject}</h3>
                      <p>{task.due_date}</p>
                      <p>{task.company_name}</p>
                      <p>{task.status}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Link>
        </div>
      </>
    )
  }
}

// Available colors from color palette
const colors = [
  "#2d3a66",
  "#070059",
  "#3d1a68",
  "#5e2d5e",
];

export default TaskClass