import React, { useEffect, useState } from "react";
import mqttClient from "../services/mqttClient";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    mqttClient.subscribe("esp32/sensor/data", (err) => {
      if (err) console.log("Failed to subscribe:", err);
    });

    mqttClient.on("message", (topic, payload) => {
      if (topic === "esp32/sensor/data") setMessage(payload.toString());
    });

    return () => {
      mqttClient.unsubscribe("esp32/sensor/data");
    };
  }, []);

  return (
    <div>
      <h2>실시간 데이터 센터</h2>
      {message ? <p>Sensor Data : {message}</p> : <p>데이터를 기다리는 중...</p>}
    </div>
  );
};

export default Dashboard;
