
import React from 'react'
import { Router, Route } from 'react-router-dom'
import Navbar from './NavbarPage'
import history from './history'
import { Jobs, Post, About, Events, Companies, Blog, Featured } from './components'

function App () {
  return (
    <Router history={history}>
      <div>
        <Navbar>
          <Route exact path='/' component={Jobs} />
          <Route exact path='/jobs' component={Jobs} />
          <Route exact path='/about' component={About} />
          <Route exact path='/post' component={Post} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/companies' component={Companies} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/featured' component={Featured} />
        </Navbar>
      </div>
    </Router>
  )
}
export default App
