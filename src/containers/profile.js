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
import { useAccount } from "../context/account-context";



function Profile(props) {
  const user = props.user;
  const accountContext = useAccount()
  console.log(`This is the ${JSON.stringify(accountContext)}`)
  
  return (
      <div>
    <MDBContainer fluid>
      <MDBRow className="bg">
        <MDBCol md="4"> </MDBCol>
        <MDBCol md="4">
          <Avatar name={accountContext.account.user} image={accountContext.account.image}/>
        </MDBCol>
        <MDBCol md="4">
          <Notifications />
        </MDBCol>
        
      </MDBRow>
      </MDBContainer>
      <MDBContainer fluid>
      <MDBRow>
        <MDBCol md="12">
          <ProfilePills/>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
      </div>
  );
}

export default Profile;
