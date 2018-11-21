import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
// import 'Jobs.css';

export default class Jobs extends Component {
  render () {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Objective Talent</h2>
          <p>Your guide to social recruitment.</p>
        </Jumbotron>
        <Link to='/about'>
          <Button bsStyle='primary'>About</Button>

        </Link>
      </Grid>
    )
  }
}
