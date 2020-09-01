import React, { useState, useEffect } from "react";
import { MDBNotification, MDBContainer } from "mdbreact";
import Pusher from "pusher-js";

function Notifications() {
  const [notifications, setNotifications] = useState(0);
  const [message, setMessage] = useState("");
  var pusher = new Pusher("e01d32568ef94bcc8f8f", {
    cluster: "us2",
  });
  var channel = pusher.subscribe("historylab");
  channel.bind("historyinsert", function (data) {
    setMessage(`Somebody entered ${data.message} into History Lab`);
    
  });
  let notifynumber = `You have ${notifications} new notification(s)`;
  // useEffect(() => {
  //   channel.bind("historyinsert", function (data){
  //     console.log(notifications)
  //     setNotifications(notifications + 1)
  //   })
   
  // });

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
          message={notifynumber}
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
