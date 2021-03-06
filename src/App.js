
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
// import Navbar from './NavbarPage'
import Navbar from './NavigationHeader'
import history from './history'
import { Jobs, About, News, Post, Featured, Events, Companies, Candidates, PostView} from './Components'
//Post, Featured
//import { Jobs, Post, About, Events, Companies, News, PostView, Featured } from './Components'


function App () {
  return (
    <Router history={history}>
      <div>
        <Navbar />
          <Switch>
            <Route exact path='/' component={Jobs} />
            <Route exact path='/jobs' component={Jobs} />
            <Route exact path='/about' component={About} />
            <Route exact path='/news' component={News} />
          //  <Route exact path='/post' component={Post} />
            <Route exact path='/events' component={Events} />
            <Route exact path='/candidates' component={Candidates} />
            <Route exact path='/companies' component={Companies} />
          //  <Route exact path='/featured' component={Featured} />
            <Route path='/:slug' component={PostView} />
          </Switch>
      </div>
    </Router>
  )
}
export default App
