import React, { Component } from 'react'
import './Post.css'
import { FormControl, FormGroup, ControlLabel, Checkbox, Grid, Button } from 'react-bootstrap'

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
      zip: '',
      country: '',
      accuratelocationcheck: false,
      fieldofficecheck: false,
      clientofficecheck: false,
      fulltimecheck: false,
      parttimecheck: false,
      contractcheck: false,
      standardcheck: false,
      flexiblecheck: false,
      retirementcheck: false,
      medicalcheck: false,
      dentalcheck: false,
      vision: false,
      stdcheck: false,
      ltdcheck: false,
      studentcheck: false,
      transitcheck: false,
      visacheck: false,
      novisacheck: false,
      onemonthcheck: false,
      threemonthcheck: false,
      nomedcheck: false,
      remotecheck: false,
      remote1daycheck: false,
      someremotecheck: false,
      timeoffcompcheck: false,
      overtimepaycheck: false,
      lesstwoweekcheck: false,
      twoweekcheck: false,
      onemonthcheck: false,
      unlimitedcheck: false,
      otherbennies: '',
      noemailcheck: '',
      followupcheck: ''     
    }
  }


  /*   getValidationState () {
    const length = this.state.value.length
    if (length > 10) return 'success'
    else if (length > 5) return 'warning'
    else if (length > 0) return 'error'
    return null
  } */

  handleCheckChange (e) {
    const name = e.target.name
    const checked = e.target.checked
    console.log(`${name} is: `, checked)
    this.setState({ [name]: checked })
  }

  handleTextChange (e) {
    const name = e.target.name
    const value = e.target.value
    console.log(name, ' is: ', value)
    this.setState({ [name]: value })
    // this.setState({ [name]: value }, () => { this.validateField(name, value) })
  }

  onSubmit (e) {
    e.preventDefault()
    // submitToServer(this.state)
  }

  errorClass (error) {
    return (error.length === 0 ? '' : 'has-error')
  }

  render () {
    // const validationState = this.getValidationState()
    // checked={this.state.medicalcheck} (does not toggle when put into checkbox)
    return (
      <Grid>
        {/*  <div className='panel panel-default'>
          <FormErrors formErrors={this.state.formErrors} />
        </div> */}
        <form className='demoForm' onSubmit={this.onSubmit}>
          <ControlLabel>Post a Job for Free!</ControlLabel>
          <br />
          <div className='input-group'>
            <input type='text' className='form-control' name='company' placeholder='Company' value={this.state.company} onChange={this.handleTextChange} />
            <span className='input-group-addon'>-</span>
            <input type='text' className='form-control' name='email' placeholder='Email' value={this.state.email} onChange={this.handleTextChange} />
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
            <input type='text' name='zip' className='form-control' placeholder='Zip' onChange={this.handleTextChange} />
            <span className='input-group-addon'>-</span>
            <input type='text' name='country' className='form-control' placeholder='Country' value={this.state.country} onChange={this.handleTextChange} />
          </div>
          <br />
          <ControlLabel>Location Type: is this the location where the employee will be working?</ControlLabel>
          <FormGroup className='form-control' onChange={this.handleCheckChange}>
            <Checkbox name='accuratelocationcheck' inline>Yes </Checkbox>
            <Checkbox name='fieldofficecheck' inline>No, the employee will be working at one of our field locations</Checkbox>
            <Checkbox name='clientofficecheck' inline>No, the employee will be working at a client's location</Checkbox>
          </FormGroup>
          <ControlLabel>Contract Type:</ControlLabel>
          <FormGroup className='form-control' onChange={this.handleCheckChange}>
            <Checkbox name='fulltimecheck' checked={this.state.fulltimecheck} inline>Full-Time</Checkbox>
            <Checkbox name='parttimecheck' checked={this.state.parttimecheck} inline>Part-Time</Checkbox>
            <Checkbox name='contractcheck' checked={this.state.contractcheck} inline>Contract</Checkbox>
          </FormGroup>
          <ControlLabel>Schedule: </ControlLabel>
          <FormGroup className='form-control' onChange={this.handleCheckChange}>
            <Checkbox name='standardcheck' checked={this.state.standardcheck} inline>Standard</Checkbox>
            <Checkbox name='flexiblecheck' checked={this.state.flexiblecheck} inline>Flexible</Checkbox>
          </FormGroup>
          <ControlLabel>Benefits (Check all that Apply):</ControlLabel>
          <FormGroup className='form-control' onChange={this.handleCheckChange}>
            <Checkbox name='retirementcheck' inline>401(k)</Checkbox>
            <Checkbox name='medicalcheck' inline>Medical</Checkbox>
            <Checkbox name='dentalcheck' inline>Dental</Checkbox>
            <Checkbox name='vision' inline>Vision</Checkbox>
            <Checkbox name='stdcheck' inline>Short-Term Disability</Checkbox>
            <Checkbox name='ltdcheck' inline>Long-Term Disability</Checkbox>
            <Checkbox name='studentcheck' inline>Student Loan Repayment Assistance</Checkbox>
            <Checkbox name='transitcheck' inline>Transit Benefits</Checkbox>
          </FormGroup>
          <ControlLabel>Do you offer visa sponsorship?</ControlLabel>
          <FormGroup className='form-control'onChange={this.handleCheckChange}>
            <Checkbox name='visacheck' checked={this.state.visacheck} inline>Yes</Checkbox>
            <Checkbox name='novisacheck' checked={this.state.novisacheck} inline>No</Checkbox>
          </FormGroup>
          <ControlLabel>Health Insurance Starts: </ControlLabel>
          <FormGroup className='form-control' onChange={this.handleCheckChange}>
            <Checkbox name='immediatemedcheck' inline>Immediately</Checkbox>
            <Checkbox name='onemonthcheck' inline>After 1 month</Checkbox>
            <Checkbox name='threemonthcheck' inline>After 3 months</Checkbox>
            <Checkbox name='nomedcheck' inline>N/A</Checkbox>
          </FormGroup>
          <ControlLabel>Remote Work Privileges: </ControlLabel>
          <FormGroup className='form-control' onChange={this.handleCheckChange}>
            <Checkbox name='onsitecheck' inline>On Site</Checkbox>
            <Checkbox name='remotecheck' inline>Remote</Checkbox>
            <Checkbox name='remote1daycheck' inline>Remote 1-Day a Week</Checkbox>
            <Checkbox name='someremotecheck' inline>Occasional Remote Work</Checkbox>
          </FormGroup>
          <ControlLabel>Overtime Compensation:</ControlLabel>
          <FormGroup className='form-control' onChange={this.handleCheckChange}>
            <Checkbox name='nocompcheck' inline>None</Checkbox>
            <Checkbox name='timeoffcompcheck' inline>Extra-Time Off</Checkbox>
            <Checkbox name='overtimepaycheck' inline>Overtime Pay</Checkbox>
          </FormGroup>
          <ControlLabel>PTO:</ControlLabel>
          <FormGroup className='form-control' onChange={this.handleCheckChange}>
            <Checkbox name='lesstwoweekcheck' inline>less than 2 weeks</Checkbox>
            <Checkbox name='twoweekcheck' inline>2 weeks</Checkbox>
            <Checkbox name='onemonthcheck' inline>1 Month</Checkbox>
            <Checkbox name='unlimitedcheck' inline>Unlimited</Checkbox>
          </FormGroup>
          <ControlLabel>Date Posted: </ControlLabel>
          <FormControl
            type='text'
            name='otherbennies'
            placeholder='Enter other benefits'
            onChange={this.handleTextChange}
          />
          <br />
          <ControlLabel>Are you interested in advertising through our email list?</ControlLabel>
          <FormGroup className='form-control' onChange={this.handleCheckChange}>
            <Checkbox name='emailcheck' inline>Yes</Checkbox>
            <Checkbox name='noemailcheck' inline>No</Checkbox>
            <Checkbox name='followupcheck' inline>Tell me More</Checkbox>
          </FormGroup>
          <br />
          <div>
            <Button type='submit' className='btn btn-primary' size='lg' block>Submit</Button>
          </div>
          <br />
        </form>
      </Grid>
    )
  }
}
