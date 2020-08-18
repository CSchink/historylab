import React from "react";
import { useHistory } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
import { MDBNavLink } from "mdbreact";
import { useAuth } from "../context/auth-context";
// import history from '../util/historyutil';

function Logout() {
  const authContext = useAuth();
  const history = useHistory();
  return (
    <MDBNavLink to="/"
      onClick={function () {
        authContext.logout();
        history.push("/");
      }}
    >
      Log out
    </MDBNavLink>
  );
}

export default Logout;
