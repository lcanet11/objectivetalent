import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Image, Button } from 'react-bootstrap'
import getJobs from '../api/'
import './Jobs.css'
// import { chunk } from 'lodash'

export default class Jobs extends Component {
  async componentDidMount () {
    console.log('inside componentdidmount')
    const jobs = await getJobs()
    let nameArray = []
    let companyArray = []
    let snippetArray = []
    let linkArray = []
    let locationArray = [' ', ' ']
    for (var i = 0; i < 100; i++) {
      nameArray.push(jobs.data.jobs[i].name)
      companyArray.push(jobs.data.jobs[i].hiring_company.name)
      snippetArray.push(jobs.data.jobs[i].snippet)
      linkArray.push(jobs.data.jobs[i].url)
      locationArray.push(jobs.data.jobs[i].city, jobs.data.jobs[i].state)
    }
    return console.log(nameArray, companyArray, snippetArray, linkArray, locationArray)
  }

  render () {
    return (
      <Grid>
        <div className='key-container'>
          <div className='col-sm-4'>
            <p><b>aa</b> at <i>Company Name: </i><br /><br />
            Maecenas in malesuada nisi, at ultrices nisi. In pretium risus sed lacus fermentum porttitor.
            Proin semper ipsum non laoreet vulputate. Quisque rutrum purus orci, non posuere eros maximus nec.
            Pellentesque nulla nunc, euismod nec tortor quis, semper porttitor augue. Praesent aliquet,
            magna quis iaculis pulvinar, mauris ligula venenatis lectus, <br /><br /><i>Location: </i></p>
          </div>
          <div className='col-sm-4'>Job Name</div>
          <div className='col-sm-4'>Job Name</div>
          <div className='col-sm-4'>Job Name</div>
          <div className='col-sm-4'>Job Name</div>
          <div className='col-sm-4'>Job Name</div>
          <div className='col-sm-4'>Job Name</div>
          <div className='col-sm-4'>Job Name</div>
        </div>
      </Grid>
    )
  }
}
