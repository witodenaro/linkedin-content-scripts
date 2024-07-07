import { requestActiveTab } from "./requestActiveTab"

interface RequestPayload<T> {
  payload: T
}

interface ContentScriptResponse<T> {
  response: T
}

type Subscriber<P, R> = (
  request: RequestPayload<P>
) => Promise<ContentScriptResponse<R>>

abstract class ContentScriptMessenger<P, R> {
  subscribe(subscriber: Subscriber<P, R>) {
    chrome.runtime.onMessage.addListener(
      (payload: RequestPayload<P>, sender, reply) => {
        subscriber(payload).then(reply)

        return true
      }
    )
  }

  async send(payload: RequestPayload<P>): Promise<ContentScriptResponse<R>> {
    return await requestActiveTab<RequestPayload<P>>(payload)
  }
}

export { ContentScriptMessenger }
