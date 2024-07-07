import type { ConnectionElement } from "linkedin-api-adapter"
import { ContentScriptMessenger } from "src/ContentScriptMessenger/ContentScriptMessenger"

interface Payload {
  start: number
  count: number
}

class FetchConnectionsMessenger extends ContentScriptMessenger<
  Payload,
  ConnectionElement[]
> {}

const firstConnectionsMessenger = new FetchConnectionsMessenger()

export { firstConnectionsMessenger }
