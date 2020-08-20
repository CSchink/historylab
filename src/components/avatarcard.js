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
        src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg"
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
