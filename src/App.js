import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Table from "./components/table";
import Login from "./containers/login";
import { useAuth } from "./context/auth-context";
import Tutorial from "./components/tutorial";
import ClassicFormPage from "./components/aboutpage";
import ScienceLab from "./components/sciencelab";
import SignUp from "./components/blogpage";
import Navigation from "./components/navbar";
import Profile from "./containers/profile";
import ToolsPage from "./containers/tools";
import LabPanels from "./containers/labs";
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
      {authContext.loggedIn && <Navigation />}

      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        {/* <Route exact path="/profile"><Profile/></Route> */}
        <Route exact path="/sottlab">
        <Profile/>
        </Route>
        <Route exact path="/tutorial">
          <ClassicFormPage />
        </Route>
        {/* <Route exact path="/sciencelab">
          <ScienceLab />
        </Route> */}
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/tools">
          <ToolsPage />
        </Route>
      </Switch>
    </div>
    // </Router>
  );
}

export default App;
