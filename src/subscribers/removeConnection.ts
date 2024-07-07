import { removeConnection } from "linkedin-api-adapter";
import { removeConnectionMessenger } from "src/messengers/RemoveConnectionMessenger";

removeConnectionMessenger.subscribe(async (message) => {
  const { profileUrn } = message.payload;

  await removeConnection(profileUrn);

  return {
    response: undefined,
  };
});
