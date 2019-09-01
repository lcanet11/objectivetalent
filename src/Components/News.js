/* eslint-disable react/jsx-fragments */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './styles/News.css'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 130px;
`
function News () {
  const [posts, setPosts] = useState()
  const createMarkup = (html) => {
    return { __html: html }
  }
  useEffect(() => {
    axios.get('http://blog.objectivetalent.com/wp-json/wp/v2/posts').then(posts => {
      setPosts(posts.data)
    })
  })
  if (!posts) {
    return null
  }
  return (
    <React.Fragment>
      <Container>
        {posts.map(post => (
          <Link to={`/${post.slug}`} key={post.id}>
            <div className='card' key={post.id}>
              <div className='card-content'>
                <h3
                  className='head'
                  dangerouslySetInnerHTML={createMarkup(post.title.rendered)}
                />
                <div
                  className='intro'
                  dangerouslySetInnerHTML={createMarkup(post.excerpt.rendered)}
                />
              </div>
            </div>
          </Link>
        ))}
      </Container>
    </React.Fragment>
  )
}

export default News
