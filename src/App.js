import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Table from "./components/table";
import Login from "./containers/login";
import Logout from "./containers/logout";
import { useAuth } from "./context/auth-context";
import Tutorial from "./components/tutorial";
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
              <Nav className="justify-content-end" style={{ width: "100%" }}>
                <Nav.Link href="/tutorial">About</Nav.Link>
                <Logout />
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        
        
        )}
        {/* {authContext.loggedIn ? <Table /> : <Login />} */}
      
          
        <Switch>
          {/* <Route path="/" component={Login} />
          <Route path="/data" component={Table} /> */}
          <Route exact path='/'><Login/></Route>
          <Route path ='/data'><Table/></Route>
          <Route path ='/tutorial'><Tutorial /></Route>
        </Switch>
        
        </div>
      // </Router>
    
  );
}

export default App;
