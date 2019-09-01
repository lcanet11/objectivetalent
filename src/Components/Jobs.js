import React, { useEffect, useState } from 'react'
import { Grid, Row } from 'react-bootstrap'
import { getJobs } from '../api'
import './styles/Jobs.css'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 130px;
`
export default function Jobs () {
  const [jobs, setJobs] = useState(null)

  const renderJobs = async () => {
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
              </div>)
    })
    return jobs
  }
  useEffect(() => {
    renderJobs().then(jobs => {
      setJobs(jobs)
    })
  })
  return (
    <Container>
      <Grid>
        <div className='key-container'> {jobs} </div>
      </Grid>
    </Container>
  )
}
