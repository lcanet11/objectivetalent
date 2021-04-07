import React from 'react'
import PropTypes from 'prop-types'

const Article = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

Article.propTypes = {
  title: PropTypes.element.isRequired,
  description: PropTypes.element.isRequired
}

export default Article
