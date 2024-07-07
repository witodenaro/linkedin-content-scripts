import type { Options } from "linkedin-api-adapter/dist/requests/addConnection/add-connection";
import { ContentScriptMessenger } from "src/ContentScriptMessenger/ContentScriptMessenger";

interface AddConnectionPayload {
  profileUrn: string;
  options: Options;
}

class AddConnectionsMessenger extends ContentScriptMessenger<
  AddConnectionPayload,
  void
> {}

export const addConnectionsMessenger = new AddConnectionsMessenger();
