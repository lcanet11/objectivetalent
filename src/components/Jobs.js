import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import { getJobs } from '../api'
import './styles/Jobs.css'

export default class Jobs extends Component {
  constructor (props) {
    super(props)
    this.state = { jobs: null }
  }

  async renderJobs () {
    const result = await getJobs()
    const jobsArray = result.data.jobs
    const jobs = jobsArray.map(function (job) {
      return (<div className='col-sm-4'>
        {job.name} at {job.hiring_company.name}
        <br /><br />Location: {job.city}, {job.state}<br /><br />
        Salary minimum: {job.salary_min}<br />
        Salary maximum: {job.salary_max}<br />
        Salary source: {job.salary_source}<br /><br />
        Posted Time: {job.posted_time_friendly}<br />
        <a href={job.url}>Apply</a>

      </div>
      )
    })
    return jobs
  }
  async componentDidMount () {
    const result = await this.renderJobs()
    this.setState({ jobs: result })
  }

  render () {
    return (
      <Grid>
        <div className='key-container' > {this.state.jobs} </div>
      </Grid>
    )
  }
}
