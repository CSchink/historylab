import React, { useState, useEffect } from "react";
import { MDBNotification, MDBContainer } from "mdbreact";
import Pusher from 'pusher-js';


function Notifications() {
  var pusher = new Pusher({
    appId: "1063466",
    key: "e01d32568ef94bcc8f8f",
    secret: "2e55a4e860c2e4314946",
    cluster: "us2",
    encrypted: true,
  });
  var channel = pusher.subscribe('historylab');
  channel.bind('historyinsert', function(data) {
    alert('An event was triggered with message: ' + data.message);
  });

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
        <MDBNotification
          show
          fade
          iconClassName="text-primary"
          title="New Entries!"
          message="Someone Posted Something"
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
