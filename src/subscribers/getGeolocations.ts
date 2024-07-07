import { getGeolocations } from "linkedin-api-adapter";
import { getGeolocationsMessenger } from "src/messengers/GetGeolocationsMessenger";

getGeolocationsMessenger.subscribe(async (payload) => {
  const { searchTerm } = payload;

  return await getGeolocations(searchTerm);
});
