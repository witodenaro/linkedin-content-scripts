import type { Options } from "linkedin-api-adapter/dist/requests/addConnection/add-connection";
import { ContentScriptMessenger } from "../ContentScriptMessenger/ContentScriptMessenger";

interface AddConnectionPayload {
  profileUrn: string;
  options?: Options;
}

class AddConnectionsMessenger extends ContentScriptMessenger<
  AddConnectionPayload,
  void
> {
  constructor() {
    super("ADD_CONNECTIONS");
  }
}

export const addConnectionsMessenger = new AddConnectionsMessenger();
