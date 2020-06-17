import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

class Logout extends Component {
    state ={
        navigate: false
    };

    logout = () => {
        sessionStorage.removeItem('token');
        this.setState({ navigate: true});
    }
    render(){
        const {navigate} = this.state;

        if (navigate) {
            return <Redirect to="/" push={true} />;
        }
        return <Nav.Link onClick={this.logout}>Sign out</Nav.Link>
    }
}

export default Logout;