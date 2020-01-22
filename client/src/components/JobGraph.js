import React from 'react';
import axios from "axios";
import {
  BarChart, Bar, Cell, XAxis, YAxis, Tooltip,
} from 'recharts';

class JobGraph extends React.Component {
  state = { totalJobs: [], data: [] }

  componentDidMount() {
    axios.post('/api/jobs/job_graph', this.state)
      .then(res => {
        this.setState({ totalJobs: res.data }, () => {
          this.loop();
        })

      })
  }

  // formats data to ingestable by bar graph
  loop = () => {
    const dataType = []
    this.state.totalJobs.map(j => {
      dataType.push([j.status, j.totals])
    })
    this.setState({ data: dataType })
  }

  render() {
    return (
      <>
        <div>
          <h3>Total Jobs by Status</h3>
        </div>
        {/* Bar graph displaying total jobs submitted by status */}
        <BarChart
          width={500}
          height={400}
          // className="graph"
          data={this.state.data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <XAxis dataKey="0" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="1" fill="#3d1a68" />
        </BarChart>
      </>
    )
  }
}


export default JobGraph;
