import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBAvatar,
  MDBCardTitle,
  MDBCardText,
  
} from "mdbreact";


function Avatar(props) {
  return (
    <MDBCard wide>
    
      <MDBAvatar>
       <img 
        className="img-fluid w-100"
        src={props.image}
        alt="Yo Man Where Yo Pic?"
      />
      </MDBAvatar>
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
