import { removeConnection } from "linkedin-api-adapter";
import { removeConnectionMessenger } from "../messengers/RemoveConnectionMessenger";

export const subscribe = () => {
  removeConnectionMessenger.subscribe(async (payload) => {
    const { profileUrn } = payload;

    await removeConnection(profileUrn);
  });
};
