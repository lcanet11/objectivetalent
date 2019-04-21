
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Navbar from './NavbarPage'
import history from './history'
import { Jobs, Post, About, Events, Companies, News, PostView } from './Components'

function App () {
  return (
    <Router history={history}>
      <div>
        <Navbar>
          <Switch>
            <Route exact path='/' component={Jobs} />
            <Route exact path='/jobs' component={Jobs} />
            <Route exact path='/about' component={About} />
            <Route exact path='/post' component={Post} />
            <Route exact path='/events' component={Events} />
            <Route exact path='/news' component={News} />
            <Route exact path='/companies' component={Companies} />
            <Route path='/:slug' component={PostView} />
          </Switch>
        </Navbar>
      </div>
    </Router>
  )
}
export default App
