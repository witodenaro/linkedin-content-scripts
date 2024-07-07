import type { GeolocationElement } from "linkedin-api-adapter";
import { ContentScriptMessenger } from "src/ContentScriptMessenger/ContentScriptMessenger"

interface Payload {
  searchTerm: string
}

type Response = GeolocationElement[]

class GetGeolocationsMessenger extends ContentScriptMessenger<
  Payload,
  Response
> {}

const getGeolocationsMessenger = new GetGeolocationsMessenger()

export { getGeolocationsMessenger }
