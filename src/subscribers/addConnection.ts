import { addConnection } from "linkedin-api-adapter";
import { addConnectionsMessenger } from "src/messengers/AddConnectionMessenger";

addConnectionsMessenger.subscribe(async (payload) => {
  const { profileUrn, options } = payload;

  await addConnection(profileUrn, options);
});
