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
        {/* area chart showing total applications submitted by day for the last 180 days */}
        <Chart
          className="graph"
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Week', 'Applications'],
            ...this.state.data
          ]}
          options={{
            title: 'Applications Submitted by Day',
            colors: ['#151E3F'],
            legend: { position: 'top', maxLines: 3 },
            hAxis: {
              title: 'Date Applied'
            },
            vAxis: {
              title: 'Applications'
            },
            animation: {
              startup: true,
              easing: 'linear',
              duration: 1500,
            },
          }}
          // For tests
          rootProps={{ 'data-testid': '2' }}
        />
      </>
    )
  }
}


export default JobGraph;
