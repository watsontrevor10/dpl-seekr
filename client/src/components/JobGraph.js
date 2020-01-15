import React, { useState, useEffect } from 'react';
import { Link, withRouter, } from 'react-router-dom'
import axios from "axios";
import Chart from "react-google-charts";


class JobGraph extends React.Component {
  // const [totalJobs, setTotalJobs] = useState([])
  state = { totalJobs: [] }

  componentDidMount() {
    axios.post('/api/jobs/job_graph', this.state)
      .then(res => {
        this.setState({ totalJobs: res.data })
      })
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
              ['Wishlist', 1],
              ['Applied', 3],
              ['Interviewed', 4],
              ['Offer', 5],
              ['Rejected', 2],
            ]}
            options={{
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
