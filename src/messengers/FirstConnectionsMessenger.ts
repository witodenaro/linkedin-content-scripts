import type { ConnectionElement } from "linkedin-api-adapter";
import { ContentScriptMessenger } from "../ContentScriptMessenger/ContentScriptMessenger";

interface Payload {
  start: number;
  count: number;
}

class FetchConnectionsMessenger extends ContentScriptMessenger<
  Payload,
  ConnectionElement[]
> {
  constructor() {
    super("FETCH_CONNECTIONS");
  }
}

const firstConnectionsMessenger = new FetchConnectionsMessenger();

export { firstConnectionsMessenger };
