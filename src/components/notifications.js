import React from "react";
import { MDBNotification, MDBContainer } from "mdbreact";

function Notifications() {
  return (
    <div style={{
      position: "fixed",
      bottom: "70px",
      left: "10px",
      zIndex: 9999,
      // backgroundColor:'#4285F4',
      paddingBottom:'10px',
      paddingTop:'10px'
    }}>
    <MDBContainer>
      <MDBNotification
        show
        fade
        iconClassName="text-primary"
        title="History Lab"
        message="Someone Posted Something"
        text="just now"
      />
      <MDBNotification
        show
        fade
        iconClassName="text-primary"
        title="Science Lab"
        message="Someone else posted something"
        text="2 seconds ago"
      />
      <MDBNotification
        show
        fade
        iconClassName="text-primary"
        title="Science Lab"
        message="Someone else posted something"
        text="2 seconds ago"
      />
    </MDBContainer>
    </div>
  );
}

export default Notifications;
