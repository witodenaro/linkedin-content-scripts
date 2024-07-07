import { getFirstConnections } from "linkedin-api-adapter";
import { firstConnectionsMessenger } from "src/messengers/FirstConnectionsMessenger";

firstConnectionsMessenger.subscribe(async (message) => {
  const { start, count } = message.payload;

  return {
    response: await getFirstConnections(start, count),
  };
});
