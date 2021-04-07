import React, { useState, useEffect } from 'react'
import Article from './Article'
const fetch = require('node-fetch')

const Articles = () => {
  const [articles, setArticles] = useState([])

  const fetchNews = () => {
    try {
      fetch('https://dev.to/api/articles?tag=webdev').then((res) => {
        res.json().then((data) => {
          setArticles(data)
          console.log(data)
        })
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <>
      <div>
        <h1>News</h1>
        <div className='news-cards'>
          {articles.map(article => (
            <Article key={article.id} title={article.title} description={article.description} {...article} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Articles
