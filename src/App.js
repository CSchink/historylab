import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Table from './components/table.js'
import Login from './containers/login.js'




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/data">History Lab</Link>
              </li>
              <li>
                <Link to="/">Login</Link>
              </li>
            </ul>                  
          </nav>

        <Route exact path="/" component={Login} />
        <Route exact path="/data" component={Table}/>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
