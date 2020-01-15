import React from 'react'
import axios from 'axios'

class TaskClass extends React.Component {
  state = { tasks: [], dueDate: '7' }

  componentDidMount() {
    axios.post('/api/tasks/tasks_due', { filter_date: this.state.dueDate })
      .then(res => {
        this.setState({ tasks: res.data })
      })
  }

  handleChange = (e) => {
    this.setState({ dueDate: e.target.value }, () => {
      this.test()
    });
  }

  test = () => {
    axios.post('/api/tasks/tasks_due', { filter_date: this.state.dueDate })
      .then(res => {
        this.setState({ tasks: res.data })
      })
  }

  render() {
    const { dueDate, tasks, } = this.state
    return (
      <>
        <h2>Tasks Due</h2>
        <br />
        <select onChange={this.handleChange} value={dueDate}>
          <option value='1'>Today</option>
          <option value='7'>7 Days</option>
          <option value='14'>14 Days</option>
          <option value='30'>30 Days</option>
        </select>
        <table>
          <tr>
            <th>Subject</th>
            <th>Due Date</th>
            <th>Company</th>
            <th>Status</th>
          </tr>
          <tbody>
            {tasks.map((task) =>
              <tr key={task.id}>
                <td>{task.subject}</td>
                <td>{task.due_date}</td>
                <td>{task.company_name}</td>
                <td>{task.status}</td>
              </tr>
            )}
          </tbody>
        </table>
      </>
    )
  }
}

export default TaskClass