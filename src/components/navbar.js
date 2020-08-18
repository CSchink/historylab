// import React from 'react';
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import Logout from "../containers/logout";

import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

function Navigation() {
  const [state, setState] = useState(false);

  return (
    <MDBNavbar color="primary-color" dark expand="md">
      {/* <MDBNavbarBrand>
          <strong className="white-text">SOTT Lab</strong>
        </MDBNavbarBrand> */}
      <MDBNavbarToggler
        onClick={() => {
          setState(true);
        }}
      />
      <MDBCollapse id="navbarCollapse3" isOpen={state} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to="/data">History Lab</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/sciencelab">Science Lab</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/tutorial">Tutorial</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <span className="mr-2">My Lab</span>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem href="/profile">Profile</MDBDropdownItem>
                <MDBDropdownItem href="/tools">Tools</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink to="/signup">Sign Up</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <Logout />
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
}

export default Navigation;

// function Navigation(){
//     return(
//         <Navbar bg="primary" variant="dark" expand="lg">
//           <Navbar.Brand href="/mylab">My Lab</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mr-auto">
//             <Nav.Link href="/data">History Lab</Nav.Link>
//               <Nav.Link href="/sciencelab">Science Lab</Nav.Link>
//               <Nav.Link href="/tutorial">Tutorial Page</Nav.Link>
//             </Nav>
//             <Nav className="justify-content-end" style={{ width: "100%" }}>
//               <Nav.Link href="/signup">Sign Up</Nav.Link>
//               <Logout/>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//     )
// }

// export default Navigation;
