import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import { getJobs } from '../api'
import './styles/Jobs.css'
import styled from 'styled-components'

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
    const renderMarkUp = (jobSnippet) => {
      return <div dangerouslySetInnerHTML={{ __html: jobSnippet }} />
    }

    const jobs = jobsArray.map(function (job) {
      const markUp = renderMarkUp(job.snippet)

      return (<div className='col-sm-3'>
        <div className='col-sm-4'>
          <container>
            <Row className='head'>
              {job.name}
            </Row>
            <Row className='company'>
              {job.hiring_company.name}
            </Row>
            <Row className='location'>
              {job.city}, {job.state}
            </Row>
            <Row>
              <p className='captions'>Salary: {job.salary_min} to {job.salary_max}
              </p>
            </Row>
            <Row className='summary'>
              {markUp}
            </Row>
            <Row className='location'>
              Posted Time: {job.posted_time_friendly}
            </Row>
            <Row>
              <button className='button'>
                <a className='link' href={job.url}>Apply</a>
              </button>
            </Row>
          </container>
        </div>
      </div>
      )
    })
    return jobs
  }
  async componentDidMount () {
    const result = await this.renderJobs()
    this.setState({ jobs: result })
  }

  createMarkup (html) {
    return { __html: html }
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
