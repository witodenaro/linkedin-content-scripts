import { ContentScriptMessenger } from "../ContentScriptMessenger/ContentScriptMessenger";

interface Payload {
  profileUrn: string;
}

class RemoveConnectionMessenger extends ContentScriptMessenger<Payload, void> {
  constructor() {
    super('REMOVE_CONNECTION');
  }
}

const removeConnectionMessenger = new RemoveConnectionMessenger();

export { removeConnectionMessenger };
