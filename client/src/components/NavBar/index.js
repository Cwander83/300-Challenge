import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


import "./style.css";

const NavBar = (props) => (

  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
      <NavItem eventKey={1} >
      Home
        </NavItem>
        <NavItem eventKey={2} href="#">
          Profile
        </NavItem>
        <NavItem eventKey={3} href="#">
        Videos
        </NavItem>
        <NavItem eventKey={4} href="#">
          Stopwatch
        </NavItem>
        <NavItem eventKey={5} href="#">
          Logout
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

);

export default NavBar;
