import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import { getJobs } from '../api'
import './styles/Companies.css'
import styled from 'styled-components'
// import { chunk } from 'lodash'

const Container = styled.div`
  margin-top: 130px;
`

export default class Jobs extends Component {
  constructor (props) {
    super(props)
    this.state = { jobs: null }
  }

  async renderJobs () {
    const result = await getJobs()
    const jobsArray = result.data.jobs
    const jobs = jobsArray.map(function (job) {
      return (
        <div className='col-sm-3'>
          {job.hiring_company.name} - {job.city}, {job.state}<br /><br />
        </div>)
    })
    return jobs
  }

  async componentDidMount () {
    const result = await this.renderJobs()
    this.setState({ jobs: result })
  }

  render () {
    return (
        <Container>
          <Grid>
            <div className='key-container' > {this.state.jobs} </div>
          </Grid>
      </Container>
    )
  }
}
