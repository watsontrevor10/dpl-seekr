import React from 'react';
import axios from "axios";
import Chart from "react-google-charts";

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
        <Chart
          className="graph"
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ['Status', 'Totals'],
            ...this.state.data
          ]}
          options={{
            colors: ['#3d1a68'],
          }}
        />
      </>
    )
  }
}


export default JobGraph;
