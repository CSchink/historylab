import React from "react";
import Notifications from "../components/notifications";
import ChatPage from "../components/chatpage";
import ProfilePills from "../components/profilepills";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Avatar from "../components/avatarcard";
// import Pills from "../components/tutorialpills";
import BigPills from "../components/bigpills";
import ToolTabs from "../components/tooltabs";
import "../index.css";
function Profile(props) {
  const user = props.user;

  return (
    <MDBContainer fluid>
      <MDBRow className="bg">
        <MDBCol md="4"> <Notifications /></MDBCol>
        <MDBCol md="4">
          <Avatar />
        </MDBCol>
        <MDBCol md="4">
          
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="12">
          <ProfilePills />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Profile;
