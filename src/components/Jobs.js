import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Image, Button } from 'react-bootstrap'
import getJobs from '../api'
import './Jobs.css'
// import { chunk } from 'lodash'

export default class Jobs extends Component {
  constructor (props) {
    super(props)
    this.state = { jobs: null }
  }
  // async componentDidMount () {
  //   console.log('inside componentdidmount')
  //   const jobs = await getJobs()
  //   let nameArray = []
  //   let companyArray = []
  //   let snippetArray = []
  //   let linkArray = []
  //   let locationArray = [' ', ' ']
  //   for (var i = 0; i < 100; i++) {
  //     nameArray.push(jobs.data.jobs[i].name)
  //     companyArray.push(jobs.data.jobs[i].hiring_company.name)
  //     snippetArray.push(jobs.data.jobs[i].snippet)
  //     linkArray.push(jobs.data.jobs[i].url)
  //     locationArray.push(jobs.data.jobs[i].city, jobs.data.jobs[i].state)
  //   }
  //   return console.log(nameArray, companyArray, snippetArray, linkArray, locationArray)
  // }

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
