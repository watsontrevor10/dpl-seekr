import React, { useState, useEffect } from 'react';
import { Link, withRouter, } from 'react-router-dom'
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
     this.setState({data: dataType})
  }

  render() {
    return (
      <>
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
              chart: {
                title: 'Total Jobs by Status'
              },
              colors: ['#3d1a68'],
              legend: 'none',
              hAxis: {
                title: 'Status',
              },
              vAxis: {
                title: 'Jobs'
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
