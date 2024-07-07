import type { ProfileElement } from "linkedin-api-adapter";
import { ContentScriptMessenger } from "src/ContentScriptMessenger/ContentScriptMessenger"

interface Payload {
  vanityName: string
}

class GetConnectionsCountMessenger extends ContentScriptMessenger<
  Payload,
  ProfileElement
> {}

const getConnectionsCountMessenger = new GetConnectionsCountMessenger()

export { getConnectionsCountMessenger }
