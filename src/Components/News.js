import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './styles/News.css'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 130px;
`

class News extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
    this.createMarkup = this.createMarkup.bind()
  }

  componentDidMount () {
    axios.get('https://www.objectivetalent.com/blog/wp-json/wp/v2/posts').then(posts => {
      this.setState({
        posts: posts.data
      })
    })
  }

  createMarkup (html) {
    return { __html: html }
  }

  render () {
    return (
      <div>
        <Container>
          {this.state.posts.map(post => (
            <Link to={`/${post.slug}`} key={post.id}>
              <div className='card' key={post.id}>
                <div className='card-content'>
                  <h3 className='head'
                    dangerouslySetInnerHTML={this.createMarkup(post.title.rendered)} />
                  <div className='intro'
                    dangerouslySetInnerHTML={this.createMarkup(post.excerpt.rendered)}
                  />
                </div>
              </div>
            </Link>
          ))}
        </Container>
      </div>
    )
  }
}

export default News
