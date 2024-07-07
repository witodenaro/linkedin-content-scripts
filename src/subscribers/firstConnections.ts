import { getFirstConnections } from "linkedin-api-adapter";
import { firstConnectionsMessenger } from "src/messengers/FirstConnectionsMessenger";

firstConnectionsMessenger.subscribe(async (payload) => {
  const { start, count } = payload;

  return await getFirstConnections(start, count);
});
