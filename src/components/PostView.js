// @flow

import React, { Component } from 'react'
import axios from 'axios'
import './PostView.css'

type PostViewProps = {
  match: any
}
class PostView extends Component {
  constructor (props: PostViewProps) {
    super(props)
    this.state = {
      post: {}
    }
    this.createMarkup = this.createMarkup.bind()
  }

  componentDidMount () {
    const slug = this.props.match.params.slug
    axios
      .get(`https://www.objectivetalent.com/blog/wp-json/wp/v2/posts?slug=${slug}`)
      .then(post => {
        this.setState({
          post: post.data[0]
        })
      })
  }

  createMarkup (html) {
    return { __html: html }
  }

  render () {
    let build
    if (this.state.post.title) {
      build = (
        <div>
          <h1 className='col-md-8 col-md-offset-3 centered' dangerouslySetInnerHTML={this.createMarkup(this.state.post.title.rendered)} />
          <div className='col-md-4 col-md-offset-4 centered' dangerouslySetInnerHTML={this.createMarkup(
            this.state.post.content.rendered
          )}
          />
        </div>
      )
    } else {
      build = <div />
    }
    return build
  }
}

export default PostView
