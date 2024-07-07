import { addConnection } from "linkedin-api-adapter";
import { addConnectionsMessenger } from "../messengers/AddConnectionMessenger";

export const subscribe = () => {
  addConnectionsMessenger.subscribe(async (payload) => {
    const { profileUrn, options } = payload;

    await addConnection(profileUrn, options);
  });
};
