import React, { Component } from 'react'
import './Blog.css'

export default class Events extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: {},
      date: '',
      content: {}
    }
  }

  componentDidMount () {
    return fetch(`http://objectivetalent.com/blog/wp-json/wp/v2/posts/`)
      .then((response) => response.json())
      .then((responseJson) => {
        // Update state here
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render () {
    return (
      <div>
        <div>
          <div className='row'>
            <div className='leftcolumn'>
              <div className='card'>
                <div className='title'>
                  <h1>{this.state.title.rendered}</h1>
                  <p> {this.state.date} </p>
                </div>

                <div
                  className='content'
                  dangerouslySetInnerHTML={{ __html: this.state.content.rendered }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
