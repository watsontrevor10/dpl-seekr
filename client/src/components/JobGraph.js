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
          <defs>
            <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3d1a68" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3d1a68" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="0" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="1" fill="url(#color1)" />
        </BarChart>
      </>
    )
  }
}


export default JobGraph;
