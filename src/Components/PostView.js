// @flow

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './styles/PostView.css'

type PostViewProps = {
  match: {
    params: {
      slug: string
    }
  }
}
function PostView (props: PostViewProps) {
  const { match } = props
  const [post, setPost] = useState({})
  useEffect(() => {
    const slug = match.params.slug
    axios
      .get(`https://blog.objectivetalent.com/wp-json/wp/v2/posts?slug=${slug}`)
      .then(post => {
        setPost(post.data[0])
      })
  })

  const createMarkup = (html) => {
    return { __html: html }
  }

  let build
  if (post.title) {
    build = (
      <div>
        <h1 className='col-md-8 col-md-offset-3 centered' dangerouslySetInnerHTML={createMarkup(post.title.rendered)} />
        <div
          className='col-md-4 col-md-offset-4 centered' dangerouslySetInnerHTML={createMarkup(
            post.content.rendered
          )}
        />
      </div>
    )
  } else {
    build = <div />
  }
  return build
}

export default PostView
