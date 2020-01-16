import React, { useState, useEffect } from 'react';
import { Link, withRouter, } from 'react-router-dom'
import axios from "axios";
import Chart from "react-google-charts";
import Moment from 'react-moment';
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

  loop = () => {
    // let dateFormat = <Moment format='YY-MM-DD'>{this.state.totalApps.weekly}</Moment>
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
          <Chart
            width={'610px'}
            height={'400px'}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Week', 'Applications'],
              ...this.state.data
            ]}
            options={{
              hAxis: {
                format: 'yyyy',
              },
              colors: ['#151E3F'],
              // Material design options
              chart: {
                title: 'Weekly Applications Submitted',
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
