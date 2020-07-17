import React from 'react';
import Navbar from "react-bootstrap/Navbar";

function FrontNav (){
    return (
        <Navbar fixed="top">
         <Navbar.Brand href="#home">
   <img
     src={require('../assets/sottlogo.jpg')}
     width="150"
     height="80"
   />
  </Navbar.Brand>       
       </Navbar>
    )
}

export default FrontNav;