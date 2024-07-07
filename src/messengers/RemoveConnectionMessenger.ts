import { ContentScriptMessenger } from "src/ContentScriptMessenger/ContentScriptMessenger";

interface Payload {
  profileUrn: string;
}

class RemoveConnectionMessenger extends ContentScriptMessenger<Payload, void> {}

const removeConnectionMessenger = new RemoveConnectionMessenger();

export { removeConnectionMessenger };
