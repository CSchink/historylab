import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";


function Avatar() {
  return (
    <MDBCard wide>
      <MDBCardImage
        cascade
        className="img-fluid"
        src={require("../assets/noimage.png")}
      />
      <MDBCardBody cascade>
        <MDBCardTitle>Welcome, User</MDBCardTitle>
        <MDBCardText>
          Maybe a Profile Intro
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Avatar;
