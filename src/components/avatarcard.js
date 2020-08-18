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
        <MDBCardTitle>MDBCard title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Avatar;
