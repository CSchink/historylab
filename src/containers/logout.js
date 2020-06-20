import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { useAuth } from '../context/auth-context';

function Logout () {
    return <Nav.Link onClick={useAuth().logout}>Log out</Nav.Link>
}

export default Logout;