import React, { useState } from 'react'
import './styles/Post.css'
import { FormControl, FormGroup, ControlLabel, Checkbox, Grid, Button, Alert, Radio } from 'react-bootstrap'
import { isEmpty, map } from 'lodash'
import { postJobs } from '../api'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 130px;
`

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

export default function Post () {
  const initialFields = {
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
    internalCandidate: ''
  }
  const [formFields, setFormFields] = useState(initialFields)
  const [isPosted, setIsPosted] = useState(false)
  const [postedSuccessfully, setPostedSuccessfully] = useState(false)
  const [emptyField, setEmptyField] = useState(true)
  const checkFields = () => {
    let updatedEmptyField = false
    map(formFields, (field) => {
      console.log(field)
      if (isEmpty(field)) {
        updatedEmptyField = true
      }
    })
    if (updatedEmptyField !== emptyField) { setEmptyField(updatedEmptyField) }
  }
  const handleCheckChange = (e) => {
    const name = e.target.name
    const id = e.target.id
    if (id === 'benefits') {
      const updatedBenefits = formFields.benefits
      if (!updatedBenefits.includes(name)) {
        updatedBenefits.push(name)
        setFormFields({ ...formFields, benefits: updatedBenefits })
      }
    } else {
      const updatedFields = formFields
      updatedFields[id] = name
      setFormFields(updatedFields)
    }
    checkFields()
  }

  const handleTextChange = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    const updatedFields = formFields
    updatedFields[name] = value
    setFormFields(updatedFields)
    checkFields()
  }
  const getPostedAlert = () => {
    const alert = null
    if (isPosted) {
      if (postedSuccessfully) {
        return <Alert variant='info'>
    Form submitted successfully.
               </Alert>
      } else {
        return <Alert variant='danger'>
  Error submitting form, please try again.
               </Alert>
      }
    }
    return alert
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!emptyField) {
      const result = await postJobs(formFields)
      if (result) {
        setPostedSuccessfully(true)
      } else {
        setPostedSuccessfully(false)
      }
      setIsPosted(true)
    }
  }

  const postedAlert = getPostedAlert()

  return (
    <Container>
      <Grid>
        <form className='demoForm' onSubmit={onSubmit}>
          <ControlLabel>Post a Job for Free!</ControlLabel>
          <br />
          <div className='input-group'>
            <input type='text' name='company' className='form-control' placeholder='Company' onChange={handleTextChange} />
            <span className='input-group-addon'>-</span>
            <input type='email' className='form-control' name='email' placeholder='Email' onChange={handleTextChange} />
          </div>
          <br />
          <FormControl
            type='text'
            name='title'
            placeholder='Job Title'
            onChange={handleTextChange}
          />
          <br />
          <FormControl
            componentClass='textarea'
            style={{ height: '150px' }}
            name='summary'
            placeholder='Job Summary (no more than 200 characters, please)'
            onChange={handleTextChange}
          />
          <br />
          <FormControl
            componentClass='textarea'
            style={{ height: '300px' }}
            name='description'
            placeholder='Full Job Description'
            onChange={handleTextChange}
          />
          <br />
          <ControlLabel>Location: </ControlLabel>
          <br />
          <div className='input-group'>
            <input type='text' name='address' className='form-control' placeholder='Address' onChange={handleTextChange} />
            <span className='input-group-addon'>-</span>
            <input type='text' name='city' className='form-control' placeholder='City' onChange={handleTextChange} />
          </div>
          <br />
          <div className='input-group'>
            <input type='text' name='state' className='form-control' placeholder='State' onChange={handleTextChange} />
            <span className='input-group-addon'>-</span>
            <input type='number' name='zipCode' className='form-control' placeholder='Zip Code' onChange={handleTextChange} />
            <span className='input-group-addon'>-</span>
            <input type='text' name='country' className='form-control' placeholder='Country' onChange={handleTextChange} />
          </div>
          <br />
          <ControlLabel>Location Type: is this the location where the employee will be working?</ControlLabel>
          <FormGroup className='form-control' onChange={handleCheckChange}>
            <Checkbox id='locationType' name={locationType.yes} checked={formFields.locationType === locationType.yes} inline>Yes</Checkbox>
            <Checkbox id='locationType' name={locationType.fieldLocation} checked={formFields.locationType === locationType.fieldLocation} inline>No, the employee will be working at one of our field locations</Checkbox>
            <Checkbox id='locationType' name={locationType.clientLocation} checked={formFields.locationType === locationType.clientLocation} inline>No, the employee will be working at a client's location</Checkbox>
          </FormGroup>
          <ControlLabel>Contract Type:</ControlLabel>
          <FormGroup className='form-control' onChange={handleCheckChange}>
            <Checkbox id='contractType' name={contractType.fullTime} checked={formFields.contractType === contractType.fullTime} inline>Full-Time</Checkbox>
            <Checkbox id='contractType' name={contractType.partTime} checked={formFields.contractType === contractType.partTime} inline>Part-Time</Checkbox>
            <Checkbox id='contractType' name={contractType.contract} checked={formFields.contractType === contractType.contract} inline>Contract</Checkbox>
          </FormGroup>
          <ControlLabel>Benefits (Check all that Apply):</ControlLabel>
          <FormGroup className='form-control' onChange={handleCheckChange}>
            <Checkbox id='benefits' name='401(k)' inline>401(k)</Checkbox>
            <Checkbox id='benefits' name='Medical' inline>Medical</Checkbox>
            <Checkbox id='benefits' name='Dental' inline>Dental</Checkbox>
            <Checkbox id='benefits' name='Vision' inline>Vision</Checkbox>
            <Checkbox id='benefits' name='Short-Term Disability' inline>Short-Term Disability</Checkbox>
            <Checkbox id='benefits' name='Long-Term Disability' inline>Long-Term Disability</Checkbox>
            <Checkbox id='benefits' name='Student Loan Repayment Assistance' inline>Student Loan Repayment Assistance</Checkbox>
            <Checkbox id='benefits' name='Transit Benefits' inline>Transit Benefits</Checkbox>
            <Checkbox id='benefits' name='Visa Sponsorship' inline>Visa Sponsorship</Checkbox>
            <Checkbox id='benefits' name='Remote Work' inline>Remote Work</Checkbox>
            <Checkbox id='benefits' name='Flexible Hours' inline>Flexible Hours</Checkbox>
          </FormGroup>
          <ControlLabel>Do you have an internal candidate for this position?</ControlLabel>
          <FormGroup className='form-control' onChange={handleCheckChange}>
            <Radio id='internalCandidate' name={internalCandidate.yes} inline>Yes</Radio>
            <Radio id='internalCandidate' name={internalCandidate.no} inline>No</Radio>
          </FormGroup>
          <ControlLabel>Application link/email</ControlLabel>
          <FormControl
            componentClass='textarea'
            name='link'
            placeholder='Paste application link/email'
            onChange={handleTextChange}
          />
          <ControlLabel>Are you interested in advertising through our email list?</ControlLabel>
          <FormGroup className='form-control' onChange={handleCheckChange}>
            <Checkbox id='emailList' name={emailList.yes} checked={formFields.emailList === emailList.yes} inline>Yes</Checkbox>
            <Checkbox id='emailList' name={emailList.no} checked={formFields.emailList === emailList.no} inline>No</Checkbox>
            <Checkbox id='emailList' name={emailList.tellMeMore} checked={formFields.emailList === emailList.tellMeMore} inline>Tell me More</Checkbox>
          </FormGroup>
          <div>
            {emptyField ? <Alert variant='danger'>
            One of the form fields are empty, please make sure all required fields are filled.
                          </Alert> : null}
            {postedAlert}
            <Button type='submit' className='btn btn-primary' size='lg' disabled={emptyField} block>Submit</Button>
          </div>
          <br />
        </form>
      </Grid>
    </Container>
  )
}
