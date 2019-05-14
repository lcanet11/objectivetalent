import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './Components/styles/NavbarPage.css'
import favicon from './favicon.ico'

class NavbarPage extends React.Component {
  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <img className='nav-logo' src={favicon} style={{ width: 30, marginTop: -7 }} />
            <Navbar.Brand>
              <a href='Jobs'>Objective Talent</a>

            </Navbar.Brand>
          </Navbar.Header>
          <Nav >
            <NavItem eventKey={2} href='Featured'>
      Featured Jobs
            </NavItem>
            <NavItem eventKey={2} href='Post'>
      Post a Job
            </NavItem>

            <NavItem eventKey={2} href='Companies'>
      Hiring Companies
            </NavItem>
            <NavItem eventKey={2} href='Events'>
      Events
            </NavItem>
            <NavItem class='navbar-right' eventKey={2} href='News'>
      News
            </NavItem>
            <NavItem class='navbar-right' eventKey={2} href='About'>
      About Us
            </NavItem>
          </Nav>
        </Navbar>
        {this.props.children}

      </div>
    )
  }
}
NavbarPage.propTypes = {
  children: PropTypes.element.isRequired
}
export default NavbarPage
