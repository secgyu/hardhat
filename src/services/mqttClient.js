import mqtt from "mqtt";

const MQTT_BROKER_URL = "mqtt://broker.hivemq.com";

const options = {
  clientId: `ReactClient_${Math.random().toString(16).substr(2, 8)}`,
  clean: true,
  connectTimeout: 4000,
  reconnectPeriod: 1000,
};

const mqttClient = mqtt.connect(MQTT_BROKER_URL, options);

mqttClient.on("connect", () => {
  console.log("MQTT Client Connected");
});

mqttClient.on("error", (error) => {
  console.log("MQTT connection error", error);
});

export default mqttClient;
