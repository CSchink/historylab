import React from "react";
import { MDBNotification, MDBContainer } from "mdbreact";

function Notifications() {

  
  return (
    <div
      style={{
        position: "fixed",
        top: "70px",
        left: "10px",
        zIndex: 9999,
        // backgroundColor:'#4285F4',
        paddingBottom: "10px",
        paddingTop: "10px",
      }}
    >
      <MDBContainer>
        {/* <MDBNotification
          show
          fade
          iconClassName="text-primary"
          title="New Entries!"
          message={message}
          text="just now"
        /> */}
        <MDBNotification
          show
          fade
          iconClassName="text-primary"
          title="Updates"
          message="You have 0 new messages"
          text="just now"
        />
        {/* <MDBNotification
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
        /> */}
      </MDBContainer>
    </div>
  );
}

export default Notifications;
