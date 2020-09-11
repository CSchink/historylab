import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import { useAccount } from "./account-context";
import { newNotifications, getNotifications } from "../connection";

const PusherContext = React.createContext();
var pusher = new Pusher("e01d32568ef94bcc8f8f", {
  cluster: "us2",
});
var historychannel = pusher.subscribe("historylab");

function PusherProvider(props) {
  const [notifications, setNotifications] = useState(
    JSON.parse(sessionStorage.getItem("notifications"))
  );
  const [message, setMessage] = useState(`You have 0 notifications`);

  historychannel.bind("historyinsert", function (data) {
    console.log(`This is the ${JSON.stringify(data)}`);
  });

  

  async function incrementNotifications() {
    const newValue = notifications + 1;
    await setNotifications(newValue);
  }

  async function retrieveNotifications(data) {
    let newnotifications = await getNotifications(data);
    console.log(newnotifications);
    let notificationumber = await newnotifications.data.length

    console.log(notificationumber);
    setNotifications(notificationumber);
    await sessionStorage.setItem("notifications", JSON.stringify(notificationumber));
    return newnotifications;
  }
  useEffect(() => {
    setMessage(`You have ${notifications} notifications`);
  }, []);

  async function notificationFeed(data) {}

  //   useEffect(() => {
  //     console.log(`these are the notifications: ${notifications}`);
  //     sessionStorage.setItem("notifications", JSON.stringify(notifications));
  //   }, [notifications]);

  return (
    <PusherContext.Provider
      value={{ incrementNotifications, retrieveNotifications, message }}
      {...props}
    />
  );
}

const usePusher = () => React.useContext(PusherContext);

export { PusherProvider, usePusher };
