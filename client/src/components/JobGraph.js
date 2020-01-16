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
        <div>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
              ['Status', 'Totals'],
              ...this.state.data
            ]}
            options={{
              colors: ['#151E3F'],
              // Material design options
              chart: {
                title: 'Total Applications',
              },
            }}
            // For tests
            rootProps={{ 'data-testid': '2' }}
          />
        </div>
      </>
    )
  }
}


export default JobGraph;
