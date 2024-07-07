import { getConnectionsCount } from "linkedin-api-adapter";
import { getConnectionsCountMessenger } from "../messengers/GetConnectionsCountMessenger";

export const subscribe = () => {
  getConnectionsCountMessenger.subscribe(async (payload) => {
    const { vanityName } = payload;

    return await getConnectionsCount(vanityName);
  });
};
