import React, { Component } from 'react'
import './Post.css'
import { FormControl, FormGroup, ControlLabel, Checkbox, Grid, Button } from 'react-bootstrap'
import './FormErrors.js'

export default class Post extends Component {
  constructor (props, context) {
    super(props, context)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      value: '',
      company: '',
      email: '',
      title: '',
      description: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      otherbennies: '',
      formErrors: { email: '', company: '' },
      fulltimecheck: false,
      parttimecheck: false,
      contractcheck: false,
      standardcheck: false,
      flexiblecheck: false,
      retirementcheck: false,
      medicalcheck: false,
      dentalcheck: false,
      stdcheck: false,
      ltdcheck: false,
      studentcheck: false,
      transitcheck: false,
      visacheck: false,
      novisacheck: false,
      immediatemedcheck: false,
      threemonthcheck: false,
      nomedcheck: false,
      onsitecheck: false,
      remotecheck: false,
      remote1daycheck: false,
      someremotecheck: false,
      lesstwoweekcheck: false,
      twoweekcheck: false,
      onemonthcheck: false,
      unlimitedcheck: false
      emailValid: false,
      formValid: false 
    }
  }

/*   getValidationState () {
    const length = this.state.value.length
    if (length > 10) return 'success'
    else if (length > 5) return 'warning'
    else if (length > 0) return 'error'
    return null
  } */

  handleChange (e) {
/*     const name=e.target.name;
    const value=e.target.value; */
    console.log('current value is: ', value)
    this.setState({ [name]: value () !== 'on' ? value : e.target.checked }) /* => { this.validateField(name, value) };*/
    console.log(`${e.target.name} is: `, e.target.checked)
  }

validateField(fieldName,value) {
  let fieldValidationErrors=this.state.formErrors;
  let emailValid=this.state.emailValid;
  let stateValid=this.state.stateValid;
  let companyValid=this.state.companyValid; 

  switch(fieldName){
    case 'company':
    companyValid = value.length<30;
    fieldValidationErrors.company = companyValid ? '' : ' too long';
    break;

    case 'email':
    emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    fieldValidationErrors.email = emailValid ? '' : ' is invalid';
    break;

    case 'title':
    titleValid = value.length<40;
    fieldValidationErrors.title = titleValid ? '' : ' too long'
    break;

    case 'description':
    descriptionValid = value.length<1500;
    fieldValidationErrors.description = descriptionValid ? '' : ' please abbreviate description'
    break;

    case 'address':
    addressValid = value.length<100;
    fieldValidationErrors.address = addressValid ? '' : ' too long'
    break;

    case 'city':
    cityValid = value.length<50;
    fieldValidationErrors.city = cityValid ? '' : ' too long'

    case 'state':
    stateValid = value.length<20;
    fieldValidationErrors.state = stateValid ? '': ' too long';
    break;

    case 'zip':
    zipValid = value.length<10;
    fieldValidationErrors.zip = zipValid ? '': ' too long';
    break;

    case 'country':
    countryValid = value.length<40;
    fieldValidationErrors.country = countryValid ? '': ' too long';
    break;

    case 'otherbennies':
    otherbenniesValid = value.length<100;
    fieldValidationErrors.otherbennies = otherbenniesValid ? '': ' too long';
    break;

    case 'contracttype'
    //Valid if in contracttype class: fieldofficecheck || accuratelocationcheck || clientofficecheck are checked

    case 'schedule'
    //valid if in contracttype class: standardcheck || flexiblecheck are checked 
    
    case 'locationtype'
    //valid if in locationtype class: accuratelocationcheck || fieldofficecheck || clientofficecheck are checked 

    case 'benefits'
    //always valid 

    case 'visa'
    //valid if in visa class: visacheck || novisacheck are checked 

    case 'medstart'
    //valid if in medstart class: immediatemedcheck || threemonthcheck || nomedcheck are checked 

    case 'remotework'
    //valid if in remotework class: onsitecheck || remotecheck || remote1daycheck || someremote are checked 

    case 'overtimecomp'
    //valid if in overtimecomp class: nocompcheck || timeoffcompcheck || overtimepaycheck are checked 

    case 'vacation'
    //valid if in vacation class: lesstwoweekcheck || twoweekcheck || onemonthcheck || unlimited check are checked 

    case 'emaillist'
    //valid if in emaillist class: emailcheck || noemailcheck || followupcheck are checked 
    
    default:
    break;


  }

  this.setState({ formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                  stateValid: stateValid
                }, this.validateForm)

  validateForm() {
      this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

}


  render () {
    return (
      <Grid>
        <form>
          {/* <div className='panel panel-default'>
          <FormErrors formErrors={this.state.formErrors} />
          </div> */}
          <FormGroup
            controlId='formBasicText'
            validationState={this.getValidationState()}
          >
            <ControlLabel>Post a Job for Free!</ControlLabel>
            <br />
            <div className='input-group'>
              <input type='text' className='form-control' name='company' placeholder='Company' value={this.state.company} onChange={this.handleChange} />
              <span className='input-group-addon'>-</span>
              <input type='text' className='form-control' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange} />
            </div>
            <br />
            <FormControl
              type='text'
              name='title'
              placeholder='Job Title'
              onChange={this.handleChange}
            />
            <br />
            <FormControl
              componentClass='textarea'
              style={{ height: '200px' }}
              name='description'
              placeholder='Job Description (no more than 100 words, please)'
              onChange={this.handleChange}
            />
            <br />
            <ControlLabel>Location: </ControlLabel>
            <br />
            <div className='input-group'>
              <input type='text' name='address' className='form-control' placeholder='Address' onChange={this.handleChange} />
              <span className='input-group-addon'>-</span>
              <input type='text' name='city' className='form-control' placeholder='City' onChange={this.handleChange} />
            </div>
            <br />
            <div className='input-group'>
              <input type='text' name='state' className='form-control' placeholder='State' onChange={this.handleChange} />
              <span className='input-group-addon'>-</span>
              <input type='text' name='zip' className='form-control' placeholder='Zip' onChange={this.handleChange} />
              <span className='input-group-addon'>-</span>
              <input type='text' name='country' className='form-control' placeholder='Country' value={this.state.country} onChange={this.handleChange} />
            </div>
            <ControlLabel>Location Type: is this the location where the employee will be working?</ControlLabel>
            <FormGroup className 'locationtype' onChange={this.handleChange}>
              <Checkbox name='accuratelocationcheck' checked={this.state.accuratelocationcheck} inline>Yes, the employee will be working at this location</Checkbox>
              <Checkbox name='fieldofficecheck' checked={this.state.fieldofficecheck} inline>No, the employee will be working at one of our field locations</Checkbox>
              <Checkbox name='clientofficecheck' checked={this.state.clientofficecheck} inline>No, the employee will be working at a client's location</Checkbox>
            </FormGroup>
            <br />
            <ControlLabel>Contract Type:</ControlLabel>
            <FormGroup className='contracttype' onChange={this.handleChange}>
              <Checkbox name='fulltimecheck' checked={this.state.fulltimecheck} inline>Full-Time</Checkbox>
              <Checkbox name='parttimecheck' checked={this.state.parttimecheck} inline>Part-Time</Checkbox>
              <Checkbox name='contractcheck' checked={this.state.contractcheck} inline>Contract</Checkbox>
            </FormGroup>
            <ControlLabel>Schedule: </ControlLabel>
            <FormGroup className='schedule' onChange={this.handleChange}>
              <Checkbox name='standardcheck' checked={this.state.standardcheck} inline>Standard</Checkbox>
              <Checkbox name='flexiblecheck' checked={this.state.flexiblecheck} inline>Flexible</Checkbox>
            </FormGroup>
            <ControlLabel>Benefits (Check all that Apply):</ControlLabel>
            <FormGroup onChange={this.handleChange}>
              <Checkbox name='retirementcheck' checked={this.state.retirementcheck} inline>401(k)</Checkbox>
              <Checkbox name='medicalcheck' checked={this.state.medicalcheck} inline>Medical</Checkbox>
              <Checkbox name='dentalcheck' checked={this.state.dentalcheck} inline>Dental</Checkbox>
              <Checkbox name='stdcheck' checked={this.state.stdcheck} inline>Short-Term Disability</Checkbox>
              <Checkbox name='ltdcheck' checked={this.state.ltdcheck} inline>Long-Term Disability</Checkbox>
              <Checkbox name='studentcheck' checked={this.state.studentcheck} inline>Student Loan Repayment Assistance</Checkbox>
              <Checkbox name='transitcheck' checked={this.state.transitcheck} inline>Transit Benefits</Checkbox>
            </FormGroup>
            <ControlLabel>Do you offer visa sponsorship?</ControlLabel>
            <FormGroup onChange={this.handleChange}>
              <Checkbox name='visacheck' checked={this.state.visacheck} inline>Yes</Checkbox>
              <Checkbox name='novisacheck' checked={this.state.novisacheck} inline>No</Checkbox>
            </FormGroup>
            <ControlLabel>Health Insurance Starts: </ControlLabel>
            <FormGroup onChange={this.handleChange}>
              <Checkbox name='immediatemedcheck' checked={this.state.immediatemedcheck} inline>Immediately</Checkbox>
              <Checkbox name='threemonthcheck' checked={this.state.threemonthcheck} inline>After 3 months</Checkbox>
              <Checkbox name='nomedcheck' checked={this.state.nomedcheck} inline>N/A</Checkbox>
            </FormGroup>
            <ControlLabel>Remote Work Privileges: </ControlLabel>
            <FormGroup onChange={this.handleChange}>
              <Checkbox name='onsitecheck' checked={this.state.onsitecheck} inline>On Site</Checkbox>
              <Checkbox name='remotecheck' checked={this.state.remotecheck} inline>Remote</Checkbox>
              <Checkbox name='remote1daycheck' checked={this.state.remote1daycheck} inline>Remote 1-Day a Week</Checkbox>
              <Checkbox name='someremotecheck' checked={this.state.someremotecheck} inline>Occasional Remote Work</Checkbox>
            </FormGroup>
            <ControlLabel>Overtime Compensation:</ControlLabel>
            <FormGroup onChange={this.handleChange}>
              <Checkbox name='nocompcheck' checked={this.state.nocompcheck} inline>None</Checkbox>
              <Checkbox name='timeoffcompcheck' checked={this.state.timeoffcompcheck} inline>Extra-Time Off</Checkbox>
              <Checkbox name='overtimepaycheck' checked={this.state.overtimepaycheck} inline>Overtime Pay</Checkbox>
            </FormGroup>
            <ControlLabel>PTO:</ControlLabel>
            <FormGroup className='vacation' onChange={this.handleChange}>
              <Checkbox name='lesstwoweekcheck' checked={this.state.lesstwoweekcheck} inline>less than 2 weeks</Checkbox>
              <Checkbox name='twoweekcheck' checked={this.state.twoweekcheck} inline>2 weeks</Checkbox>
              <Checkbox name='onemonthcheck' checked={this.state.onemonthcheck} inline>1 Month</Checkbox>
              <Checkbox name='unlimitedcheck' checked={this.state.unlimitedcheck} inline>Unlimited</Checkbox>
            </FormGroup>
            <FormControl.Feedback />
          </FormGroup>
          <ControlLabel>Other Benefits: </ControlLabel>
          <FormControl
            type='text'
            name='otherbennies'
            placeholder='Enter other benefits'
            onChange={this.handleChange}
          />
          <br />
          <ControlLabel>Are you interested in advertising through our email list?</ControlLabel>
          <FormGroup className='email' onChange={this.handleChange}>
            <Checkbox name='emailcheck' checked={this.state.emailcheck} inline>Yes</Checkbox>
            <Checkbox name='noemailcheck' checked={this.state.noemailcheck} inline>No</Checkbox>
            <Checkbox name='followupcheck' checked={this.state.followupcheck} inline>Tell me More</Checkbox>
          </FormGroup>
          <FormControl.Feedback />
          <div>
            <Button variant='primary' size='lg' block>
          Submit
            </Button>
          </div>
          <br />
          <br />
        </form>
      </Grid>
    )
  }
}
