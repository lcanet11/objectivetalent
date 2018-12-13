import React, { Component } from 'react'
import './Post.css'
import { Grid, Row, Col, Image, Button } from 'react-bootstrap'
// import { Form, Text, Scope } from 'informed'

export default class Events extends Component {
  render () {
    return (
      <Grid>
        <div className='key-container' >
          <div className='col-sm-8'>
            We distribute your job postings to over 15,000 professionals via web, email and mobile notifications in the tri-state and mid-atlantic area (New York, New Jersey, Connecticut, Pennsylvania) in the following categories: software engineering, general engineering, design, data analysis, enterprise sales, marketing, operations, and related technical specialties.
            <br />
          </div>
          <div className='col-sm-8'>
            <iframe src='https://docs.google.com/forms/d/e/1FAIpQLSeFJRGZx3dv49D1JED4T3a4eDFSMklRfeD4vWAwIdfSgSLerw/viewform?embedded=true' width='640' height='1293' frameBorder='0' marginHeight='0' marginWidth='0'>Loading...</iframe>
          </div>
          <div className='col-sm-6'>
            <p>
            Did you know: embracing green recruitment ideas is not just environmentally friendly; it also helps improve employee happiness and decrease turnover. Best of all, key green recruitment ideas can be implemented at a low or no cost. To find out more, fill out the green recruitment survey below.
            </p>
          </div>
          <div className='col-sm-6'>
            <p>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSfFhRzZilBSIqtjoKFO95r4venuVz_dTcfqttww0XoYBNjFtg/viewform?usp=sf_link'>Take our Green Recruitment Survey</a>
            </p>
          </div>
        </div>
      </Grid>
    /*   <Form id='complex-form'>
        <label htmlFor='complex-name'>First name:</label>
        <Text field='name' id='complex-name' /><br />
        <Scope scope='favorite'>
          <label htmlFor='complex-color'>Favorite color:</label>
          <Text field='color' id='complex-color' /><br />
          <label htmlFor='complex-food'>Favorite food:</label>
          <Text field='food' id='complex-food' /><br />
        </Scope>
        <label htmlFor='complex-friend-0'>Friend 1:</label>
        <Text field='friends[0]' id='complex-friend-0' /><br />
        <label htmlFor='complex-friend-1'>Friend 2:</label>
        <Text field='friends[1]' id='complex-friend-1' /><br />
        <label htmlFor='complex-friend-2'>Friend 3:</label>
        <Text field='friends[2]' id='complex-friend-2' /><br />
        <button type='submit'>
    Submit
        </button>
      </Form> */
    )
  }
}

// <div className='col-sm-6'><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfFhRzZilBSIqtjoKFO95r4venuVz_dTcfqttww0XoYBNjFtg/viewform?embedded=true" width="640" height="2659" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe></div>
