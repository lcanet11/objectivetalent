import React, { Component } from 'react'
import './Blog.css'
import { Grid, Row, Col, Image, Button } from 'react-bootstrap'

export default class Blog extends Component {
  constructor () {
    super()
    this.state = {
      projects: []
    }
  }

  componentDidMount () {
    let projectsURL = 'http://localhost:8888/wp-json/wp/v2/projects'
    fetch(projectsURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          projects: response
        })
      })
  }

  render () {
    let projects = this.state.projects.map((project, index) => {
      return (
        <div>
          <img src='' />
        </div>
      )
    }

    )
    return (
      <div className='Blog'>
        <h1>Projects</h1>
      {/*  {projects} */}
      </div>
    )
  }
}
