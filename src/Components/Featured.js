
import React, { useEffect, useState } from 'react'
import { getFeaturedJobs } from '../api'
// import { Grid, Row } from 'react-bootstrap'
import './styles/Featured.css'

function Featured (props) {
  const [ featuredJobsState, setFeaturedJobs ] = useState([])
  useEffect(() => {
    const featuredJobs = async () => {
      const result = await getFeaturedJobs()
      setFeaturedJobs(result)
    }
    featuredJobs()
  }, [])
  let formattedJobs = null
  if (featuredJobsState) {
    formattedJobs = featuredJobsState.map((job) => {
      if (!job.approved) {
        return <div className='col-6'>
          <container>
            <h1>
              {job.title}
            </h1>
            <h2>
              {job.company}
            </h2>
            <p className='summary'>
              {job.summary}
            </p>
            <p className='description'>
              {job.description}
            </p>
            <h3>
              Location: {job.address}, {job.city}, {job.state}, {job.zipCode}
            </h3>
            <h4>
            Is this the final job location? {job.locationType}
            </h4>
            <h4>
            Contract Type: {job.contractType}
            </h4>
            <h5>
            Benefits: {job.benefits}
            </h5>
            <h6>
            Is there an internal candidate? {job.internalCandidate}
            </h6>
          </container>
        </div>
      }
    })
  }

  return (
    <div>
      {formattedJobs}
    </div>
  )
}

export default Featured
