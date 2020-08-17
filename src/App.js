import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Table from "./components/table";
import Login from "./containers/login";
import Logout from "./containers/logout";
import { useAuth } from "./context/auth-context";
import Tutorial from "./components/tutorial";
import ClassicFormPage from "./components/aboutpage";
import ScienceLab from "./components/sciencelab";
import SignUp from "./components/blogpage";
// import history from './util/historyutil'

function App() {
  const authContext = useAuth();
  // console.log(authContext);
  // When one thing happens you want something else to happen
  // useEffect(() => {
  //   if(authContext.loggedIn){
  //     console.log("redirect to table")
  //   } else {
  //     console.log("redirect to login")
  //   }
  // }, [authContext.loggedIn])
  return (
    // <Router>
    <div>
      {authContext.loggedIn && (
        <Navbar bg="primary" variant="dark" expand="lg">
          <Navbar.Brand href="/data">History Lab</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/sciencelab">Science Lab</Nav.Link>
              <Nav.Link href="/tutorial">Tutorial Page</Nav.Link>
            </Nav>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <Logout />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
      {/* {authContext.loggedIn ? <Table /> : <Login />} */}

      <Switch>
        {/* <Route path="/" component={Login} />
          <Route path="/data" component={Table} /> */}
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/data">
          <Table />
        </Route>
        <Route exact path="/tutorial">
          <ClassicFormPage />
        </Route>
        <Route exact path="/sciencelab">
          <ScienceLab />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </div>
    // </Router>
  );
}

export default App;
