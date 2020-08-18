import React from "react";
import Notifications from "../components/notifications";
import ChatPage from "../components/chatpage";
import ProfilePills from "../components/profilepills";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Avatar from "../components/avatarcard"
// import Pills from "../components/tutorialpills";
import BigPills from "../components/bigpills";

function Profile(props) {
  const user = props.user;

  return (
      
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol md="3"><Avatar /></MDBCol>
        <MDBCol md="9"><ProfilePills /></MDBCol>
      </MDBRow>
    </MDBContainer>

  );
}

export default Profile;
