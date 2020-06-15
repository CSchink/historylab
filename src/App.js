import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Table from './components/table.js'
import Login from './containers/login.js'
import { hasToken } from './util/tokenutil';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


function App() {

  return (
    <BrowserRouter>
     
        <div>
          {hasToken() && 
          <Navbar bg="primary" variant="dark" expand="lg">
            
            <Navbar.Brand href="/data">History Lab</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
      <Nav.Link href="#home">FAQs</Nav.Link>
      <Nav.Link href="#link">Log Out</Nav.Link>
        </Nav>
        </Navbar.Collapse>
          </Navbar>
          }
           <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/data" component={Table}/>
        </Switch>
        </div>
      
    </BrowserRouter>
  );
}

export default App;
