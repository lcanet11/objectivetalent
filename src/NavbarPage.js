import React from 'react'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import PropTypes from 'prop-types'
// import 'NavbarPage.css'

class NavbarPage extends React.Component {
  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#home'>Objective Talent</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href='Jobs'>
      Jobs
            </NavItem>
            <NavItem eventKey={2} href='Post'>
      Post
            </NavItem>
            <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
              <MenuItem eventKey={3.1} href='Jobs'>Search for a job</MenuItem>
              <MenuItem eventKey={3.2} href='Post'>Post a Job</MenuItem>
              <MenuItem eventKey={3.3} href='Events'>Our Events</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4} href='About'>About Us</MenuItem>
            </NavDropdown>
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
