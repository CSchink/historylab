import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";


function Avatar(props) {
  return (
    <MDBCard wide>
      <MDBCardImage
        cascade
        className="img-fluid"
        src={props.image}
        alt="Yo Man Where Yo Pic?"
      />
      <MDBCardBody cascade>
        <MDBCardTitle>Welcome, {props.name}</MDBCardTitle>
        <MDBCardText>
          Your name is {props.name} and I know that because I'm a smart computer!
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Avatar;
