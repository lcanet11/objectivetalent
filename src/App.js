
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './NavbarPage'
import history from './history'
import { Jobs, Post, About } from './components'

function App () {
  return (
    <Router history={history}>
      <div>
        <Navbar>
          <Route exact path='/' component={Jobs} />
          <Route path='/about' component={About} />
          <Route path='/post' component={Post} />
        </Navbar>
      </div>
    </Router>
  )
}
export default App
