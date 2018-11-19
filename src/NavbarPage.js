import React from "react"
import { Alert } from 'react-bootstrap'
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'


class NavbarPage extends React.Component {
  /*
  state = {
    isOpen: false
  }

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen })
  */
  render() {
    return (
//<Alert />
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Objective Talent</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Jobs
    </NavItem>
    <NavItem eventKey={2} href="#">
      Post
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Search for a Job</MenuItem>
      <MenuItem eventKey={3.2}>Post a Job</MenuItem>
      <MenuItem eventKey={3.3}>Our Events</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>About Us</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
    )
  }
}

export default NavbarPage