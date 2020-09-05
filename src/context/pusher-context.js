import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";

const PusherContext = React.createContext();
var pusher = new Pusher("e01d32568ef94bcc8f8f", {
  cluster: "us2",
});
var historychannel = pusher.subscribe("historylab");

function PusherProvider(props) {
  const [notifications, setNotifications] = useState(
    // 0
    JSON.parse(sessionStorage.getItem("notifications")) ?? 0
  );
  const [message, setMessage] = useState("");

  //   function HistoryMessages() {
  //     historychannel.bind(props.channel, function (data) {
  //       console.log(data.message);
  //       setMessage(`Somebody entered ${data.message} into History Lab`);
  //     });
  //   }
  console.log("Here");

  useEffect(() => {
    historychannel.bind("historyinsert", function (data) {
      console.log(`This is the ${JSON.stringify(data)}`);
      // console.log(notifications)
      // console.log(notifications + 1)
      // setNotifications(notifications + 1);
      incrementNotifications();

      console.log(`You have ${notifications} notifications`);
    });
  }, []);

  function incrementNotifications() {
    // const n = JSON.parse(sessionStorage.getItem("notifications")) ?? 0;
    const newValue = notifications + 1;
    console.log(
      "notifications",
      notifications,
      //  "n", n,
      "newValue",
      newValue
    );
    setNotifications(newValue);
    sessionStorage.setItem("notifications", JSON.stringify(newValue));
  }

  function getNotifications() {
    return notifications;
  }

  //   useEffect(() => {
  //     console.log(`these are the notifications: ${notifications}`);
  //     sessionStorage.setItem("notifications", JSON.stringify(notifications));
  //   }, [notifications]);

  return (
    <PusherContext.Provider value={{ getNotifications, message }} {...props} />
  );
}

const usePusher = () => React.useContext(PusherContext);

export { PusherProvider, usePusher };
