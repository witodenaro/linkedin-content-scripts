import { addConnection } from "linkedin-api-adapter";
import { addConnectionsMessenger } from "src/messengers/AddConnectionMessenger";

addConnectionsMessenger.subscribe(async (message) => {
  const { profileUrn, options } = message.payload;

  await addConnection(profileUrn, options);

  return {
    response: undefined,
  };
});
