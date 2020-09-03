import React from "react";
import Pusher from "pusher-js";

const PusherContext = React.createContext();

function PusherProvider(props) {
  const [notifications, setNotifications] = useState(0);
  const [message, setMessage] = useState("");

  var pusher = new Pusher("e01d32568ef94bcc8f8f", {
    cluster: "us2",
  });

  var historychannel = pusher.subscribe("historylab");

  function HistoryMessages() {
    channel.bind(props.channel, function (data) {
      console.log(data.message);
      setMessage(`Somebody entered ${data.message} into History Lab`);
    });
  }

    useEffect(() => {
      historychannel.bind("historyinsert", function (data) {
        setNotifications(notifications + 1);
      });
    });
  

  return (
    <PusherContext.Provider value={{ notifications, message }} {...props} />
  );
}

const usePusher = () => React.useContext(PusherContext);

export { PusherProvider, usePusher };
