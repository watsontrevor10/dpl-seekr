import React from 'react'
import axios from 'axios'
import { Link, withRouter, } from 'react-router-dom'

class TaskClass extends React.Component {
  state = { tasks: [], dueDate: '7' }


  componentDidMount() {
    axios.post('/api/tasks/tasks_due', { filter_date: this.state.dueDate })
      .then(res => {
        this.setState({ tasks: res.data })
      })
  }

  random = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor
  }

  handleChange = (e) => {
    this.setState({ dueDate: e.target.value }, () => {
      this.updateTasks()
    });
  }

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
            <select onChange={this.handleChange} value={dueDate}>
              <option value='1'>Today</option>
              <option value='7'>7 Days</option>
            </select>
          </div>
          <hr />
          <Link to="/board" style={{ textDecoration: "none" }}>
            <div className="task-card-container">
              {tasks.map((task) =>
                <>
                  <div className="task-card" style={{ backgroundColor: `${this.random()}` }}>
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

const colors = [
  "#2d3a66",
  "#070059",
  "#3d1a68",
  "#5e2d5e",
];
export default TaskClass