import React from 'react';
import { Link } from "react-router-dom";
import {Navbar, Nav, NavItem} from 'react-bootstrap';


import "./style.css";

const NavBar = (props) => (

  <Navbar className="Navbarmain" collapseOnSelect>
    <Navbar.Header>
      <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
      {props.isAuthenticated &&
						(<NavItem className="NavItem">
							<Link className="NavItem" to="/Home">Home</Link>
						</NavItem>)
					}
					{props.isAuthenticated &&
						(<NavItem className="NavItem">
							<Link className="NavItem" to="/Profile">Profile</Link>
						</NavItem>)
					}
				  {props.isAuthenticated &&
					(<NavItem className="NavItem">
						<Link className="NavItem" to="/StopWatch">StopWatch</Link>
          </NavItem>)
        }
        {props.isAuthenticated &&
					(<NavItem className="NavItem">
						<Link className="NavItem" to="/YoutubePage">Videos</Link>
          </NavItem>)
        }
          {props.isAuthenticated &&
					(<NavItem className="NavItem">
						<Link className="NavItem" to="/Challenge">Challenge</Link>
          </NavItem>)
        }
         {props.isAuthenticated &&
					(<NavItem className="NavItem" onClick = {props.handleLogout}>
						<Link className="NavItem" to="/">Logout</Link>
          </NavItem>)
        }
					
				
   
        
      </Nav>
    </Navbar.Collapse>
  </Navbar>

);

export default NavBar;
