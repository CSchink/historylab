import React from "react";
import Navbar from "react-bootstrap/Navbar";

function FrontNav() {
  return (
    <div className='fixed-top float-left'>
      <img src={require("../assets/sottlogo.jpg")} width="150" height="80" />
    </div>
  );
}

export default FrontNav;
