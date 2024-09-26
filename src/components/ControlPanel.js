import React, { useState } from "react";
import mqttClient from "../services/mqttClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ControlPanel = () => {
  const [command, setCommand] = useState("");

  const handleSend = () => {
    if (command.trim()) {
      mqttClient.publish("esp32/command", command, (err) => {
        if (err) {
          console.log("Failed to publish command", err);
        } else {
          console.log(`Sent command: ${command}`);
        }
      });
      setCommand("");
    }
  };
  return (
    <div>
      <h2>Control Panel</h2>
      <input type="text" value={command} onChange={(e) => setCommand(e.target.value)} placeholder="Enter command" />
      <button onClick={handleSend}>
        <FontAwesomeIcon icon={faPaperPlane} /> Send Command
      </button>
    </div>
  );
};

export default ControlPanel;
