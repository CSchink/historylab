import React from 'react';
import {
    useHistory
  } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import { useAuth } from '../context/auth-context';
// import history from '../util/historyutil';

function Logout () {
    const authContext = useAuth()
    const history = useHistory()
    return <Nav.Link onClick={
        function (){
            authContext.logout()
            history.push('/')
        }
    
    }>Log out</Nav.Link>
}

export default Logout;