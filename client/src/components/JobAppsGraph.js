import React from 'react';
import axios from "axios";
import Chart from "react-google-charts";
import 'moment-timezone'


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
        {/* area chart showing total applications submitted by day for the last 180 days */}
        <Chart
          className="graph"
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ['Date', 'Applications'],
            ...this.state.data
          ]}
          options={{
            colors: ['#3d1a68'],
            legend: { position: 'none' },
          }}
        />
      </>
    )
  }
}


export default JobGraph;
