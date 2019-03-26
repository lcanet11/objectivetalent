import React, { Component } from 'react'
import './styles/Post.css'
import { FormControl, FormGroup, ControlLabel, Checkbox, Grid, Button, Alert } from 'react-bootstrap'
import { isEmpty, map } from 'lodash'
import { postJobs } from '../api'
const locationType = {
  yes: 'Yes',
  fieldLocation: 'No, the employee will be working at one of our field locations',
  clientLocation: "No, the employee will be working at a client's location"
}
const contractType = {
  fullTime: 'Full-Time',
  partTime: 'Part-Time',
  contract: 'Contract'
}
const emailList = {
  yes: 'yes',
  no: 'no',
  tellMeMore: 'Tell me More'
}
const internalCandidate = {
  yes: 'yes',
  no: 'no'
}

export default class Post extends Component {
  constructor (props, context) {
    super(props, context)

    this.onSubmit = this.onSubmit.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.state = {
      company: '',
      email: '',
      title: '',
      summary: '',
      description: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      contractType: '',
      locationType: '',
      benefits: [],
      emailList: '',
      internalCandidate: '',
      emptyField: false
    }
  }

  handleCheckChange (e) {
    const name = e.target.name
    const id = e.target.id
    if (id === 'benefits') {
      const benefits = this.state.benefits
      if (!benefits.includes(name)) {
        benefits.push(name)
        this.setState({ benefits })
      }
    } else {
      this.setState({ [id]: name })
    }
  }

  handleTextChange (e) {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    if (!isEmpty(value)) {
      this.setState({ [name]: value })
    }
  }

  onSubmit (e) {
    e.preventDefault()
    let emptyField = false
    map(this.state, (field) => {
      if (isEmpty(field) && typeof field !== 'boolean') {
        emptyField = true
      }
    })
    if (!emptyField) {
      postJobs(this.state)
    } else {
      this.setState({ emptyField })
    }
  }

  render () {
    return (
      <Grid>
        <form className='demoForm' onSubmit={this.onSubmit}>
          <ControlLabel>Post a Job for Free!</ControlLabel>
          <br />
          <div className='input-group'>
            <input type='text' className='form-control' name='company' placeholder='Company' value={this.state.company} onChange={this.handleTextChange} />
            <span className='input-group-addon'>-</span>
            <input type='email' className='form-control' name='email' placeholder='Email' value={this.state.email} onChange={this.handleTextChange} />
          </div>
          <br />
          <FormControl
            type='text'
            name='title'
            placeholder='Job Title'
            onChange={this.handleTextChange}
          />
          <br />
          <FormControl
            componentClass='textarea'
            style={{ height: '150px' }}
            name='summary'
            placeholder='Job Summary (no more than 200 characters, please)'
            onChange={this.handleTextChange}
          />
          <br />
          <FormControl
            componentClass='textarea'
            style={{ height: '300px' }}
            name='description'
            placeholder='Full Job Description'
            onChange={this.handleTextChange}
          />
          <br />
          <ControlLabel>Location: </ControlLabel>
          <br />
          <div className='input-group'>
            <input type='text' name='address' className='form-control' placeholder='Address' onChange={this.handleTextChange} />
            <span className='input-group-addon'>-</span>
            <input type='text' name='city' className='form-control' placeholder='City' onChange={this.handleTextChange} />
          </div>
          <br />
          <div className='input-group'>
            <input type='text' name='state' className='form-control' placeholder='State' onChange={this.handleTextChange} />
            <span className='input-group-addon'>-</span>
            <input type='number' name='zipCode' className='form-control' placeholder='Zip Code' onChange={this.handleTextChange} />
            <span className='input-group-addon'>-</span>
            <input type='text' name='country' className='form-control' placeholder='Country' value={this.state.country} onChange={this.handleTextChange} />
          </div>
          <br />
          <ControlLabel>Location Type: is this the location where the employee will be working?</ControlLabel>
          <FormGroup className='form-control' onChange={this.handleCheckChange}>
            <Checkbox id='locationType' name={locationType.yes} checked={this.state.locationType === locationType.yes} inline>Yes</Checkbox>
            <Checkbox id='locationType' name={locationType.fieldLocation} checked={this.state.locationType === locationType.fieldLocation} inline>No, the employee will be working at one of our field locations</Checkbox>
            <Checkbox id='locationType' name={locationType.clientLocation} checked={this.state.locationType === locationType.clientLocation} inline>No, the employee will be working at a client's location</Checkbox>
          </FormGroup>
          <ControlLabel>Contract Type:</ControlLabel>
          <FormGroup className='form-control' onChange={this.handleCheckChange}>
            <Checkbox id='contractType' name={contractType.fullTime} checked={this.state.contractType === contractType.fullTime} inline>Full-Time</Checkbox>
            <Checkbox id='contractType' name={contractType.partTime} checked={this.state.contractType === contractType.partTime} inline>Part-Time</Checkbox>
            <Checkbox id='contractType' name={contractType.contract} checked={this.state.contractType === contractType.contract} inline>Contract</Checkbox>
          </FormGroup>
          <ControlLabel>Benefits (Check all that Apply):</ControlLabel>
          <FormGroup className='form-control' onChange={this.handleCheckChange}>
            <Checkbox id='benefits' name='401(k)' inline>401(k)</Checkbox>
            <Checkbox id='benefits' name='Medical' inline>Medical</Checkbox>
            <Checkbox id='benefits' name='Dental' inline>Dental</Checkbox>
            <Checkbox id='benefits'name='Vision' inline>Vision</Checkbox>
            <Checkbox id='benefits' name='Short-Term Disability' inline>Short-Term Disability</Checkbox>
            <Checkbox id='benefits' name='Long-Term Disability' inline>Long-Term Disability</Checkbox>
            <Checkbox id='benefits' name='Student Loan Repayment Assistance' inline>Student Loan Repayment Assistance</Checkbox>
            <Checkbox id='benefits' name='Transit Benefits' inline>Transit Benefits</Checkbox>
            <Checkbox id='benefits' name='Visa Sponsorship' inline>Visa Sponsorship</Checkbox>
            <Checkbox id='benefits' name='Remote Work' inline>Remote Work</Checkbox>
            <Checkbox id='benefits' name='Flexible Hours' inline>Flexible Hours</Checkbox>
          </FormGroup>
          <ControlLabel>Do you have an internal candidate for this position?</ControlLabel>
          <FormGroup className='form-control' onChange={this.handleCheckChange}>
            <Checkbox id='internalCandidate' name={internalCandidate.yes} checked={this.state.internalCandidate === internalCandidate.yes} inline>Yes</Checkbox>
            <Checkbox id='internalCandidate' name={internalCandidate.no} checked={this.state.internalCandidate === internalCandidate.no} inline>No</Checkbox>
          </FormGroup>
          <ControlLabel>Are you interested in advertising through our email list?</ControlLabel>
          <FormGroup className='form-control' onChange={this.handleCheckChange}>
            <Checkbox id='emailList' name={emailList.yes} checked={this.state.emailList === emailList.yes} inline>Yes</Checkbox>
            <Checkbox id='emailList' name={emailList.no} checked={this.state.emailList === emailList.no} inline>No</Checkbox>
            <Checkbox id='emailList' name={emailList.tellMeMore} checked={this.state.emailList === emailList.tellMeMore} inline>Tell me More</Checkbox>
          </FormGroup>
          <div>
            {this.state.emptyField ? <Alert variant='danger'>
          One of the form fields are empty, please make sure all required fields are filled.
            </Alert> : null }
            <Button type='submit' className='btn btn-primary' size='lg' block>Submit</Button>
          </div>
          <br />
        </form>
      </Grid>
    )
  }
}
