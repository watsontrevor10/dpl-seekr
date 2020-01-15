import React from 'react'
import axios from 'axios'

class TaskClass extends React.Component {
  state = { interviews: [], dueDate: '7' }

  componentDidMount() {
    axios.post('/api/interviews/upcoming_interviews', { filter_date: this.state.dueDate })
      .then(res => {
        this.setState({ interviews: res.data })
      })
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
        <h2>Interviews Due</h2>
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
            <th>Date</th>
            <th>Type</th>
            <th>Company</th>
            <th>Job Title</th>
            <th>Description</th>
          </tr>
          <tbody>
            {interviews.map((interview) =>
              <tr key={interview.id}>
                <td>{interview.subject}</td>
                <td>{interview.date}</td>
                <td>{interview.interview_type}</td>
                <td>{interview.company_name}</td>
                <td>{interview.job_title}</td>
                <td>{interview.description}</td>
              </tr>
            )}
          </tbody>
        </table>
      </>
    )
  }
}

export default TaskClass