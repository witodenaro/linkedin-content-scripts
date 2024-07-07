import type { ProfileElement } from "linkedin-api-adapter";
import { ContentScriptMessenger } from "../ContentScriptMessenger/ContentScriptMessenger";

interface Payload {
  vanityName: string;
}

class GetConnectionsCountMessenger extends ContentScriptMessenger<
  Payload,
  ProfileElement
> {
  constructor() {
    super("GET_CONNECTIONS_COUNT");
  }
}

const getConnectionsCountMessenger = new GetConnectionsCountMessenger();

export { getConnectionsCountMessenger };
