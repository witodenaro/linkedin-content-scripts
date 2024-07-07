import type { GeolocationElement } from "linkedin-api-adapter";
import { ContentScriptMessenger } from "../ContentScriptMessenger/ContentScriptMessenger";

interface Payload {
  searchTerm: string;
}

type Response = GeolocationElement[];

class GetGeolocationsMessenger extends ContentScriptMessenger<
  Payload,
  Response
> {
  constructor() {
    super("GET_GEOLOCATIONS");
  }
}

const getGeolocationsMessenger = new GetGeolocationsMessenger();

export { getGeolocationsMessenger };
