import { requestActiveTab } from "./requestActiveTab";

interface Message<T> {
  id: string;
  payload: T;
}

interface ContentScriptResponse<T> {
  response: T;
}

type Subscriber<P, R> = (request: P) => Promise<R>;

abstract class ContentScriptMessenger<P, R> {
  constructor(private id: string) {}

  subscribe(subscriber: Subscriber<P, R>) {
    chrome.runtime.onMessage.addListener(
      (message: Message<P>, sender, reply) => {
        if (message.id === this.id) {
          subscriber(message.payload).then(reply);
          return true;
        }
      }
    );
  }

  async send(payload: P): Promise<ContentScriptResponse<R>> {
    return await requestActiveTab<Message<P>>({ id: this.id, payload });
  }
}

export { ContentScriptMessenger };
