import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Table from "./components/table";
import Login from "./containers/login";
import Logout from "./containers/logout";
import { useAuth } from "./context/auth-context";
import history from "./util/historyutil";

function App() {
  const authContext = useAuth();
  console.log(authContext);
  return (
    <div>
      <BrowserRouter>
        {authContext.loggedIn && (
          <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="/data">History Lab</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end" style={{ width: "100%" }}>
                <Nav.Link href="#home">FAQs</Nav.Link>
                <Logout />
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )}
        {
          authContext.loggedIn ? <Table/> : <Login/>
        }
        {/* <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/data" component={Table} />
        </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
