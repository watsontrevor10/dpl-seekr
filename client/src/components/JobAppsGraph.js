import React from 'react';
import axios from "axios";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';


class JobGraph extends React.Component {
  state = { totalApps: [], data: [] }

  componentDidMount() {
    axios.post('/api/jobs/apps_over_time', this.state)
      .then(res => {
        this.setState({ totalApps: res.data }, () => {
          this.loop()
        })
      })
  }

  // formats data to be ingestable by graph
  loop = () => {
    const dataType = []
    this.state.totalApps.map(j => {
      dataType.push([
        j.date,
        j.count
      ])
    })
    this.setState({ data: dataType })
  }


  render() {
    return (
      <>
        <div>
          <h3>Applications Submitted by Day</h3>
        </div>
        {/* Area chart displaying number of applications by day */}
        <AreaChart
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
          <Area type="monotone" dataKey="1" stroke='black' fill="#3d1a68" />
        </AreaChart>
      </>
    );
  }
}

export default JobGraph;
