import React from "react";
import { useHistory } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MDBDropdownItem } from "mdbreact";
import { useAuth } from "../context/auth-context";
// import history from '../util/historyutil';

function Logout() {
  const authContext = useAuth();
  const history = useHistory();
  return (
    <MDBDropdownItem
      href="/"
      onClick={function () {
        authContext.logout();
      }}
    >
      Log out
    </MDBDropdownItem>
  );
}

export default Logout;
