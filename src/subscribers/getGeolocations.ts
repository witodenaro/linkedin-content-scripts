import { getGeolocations } from "linkedin-api-adapter";
import { getGeolocationsMessenger } from "src/messengers/GetGeolocationsMessenger";

getGeolocationsMessenger.subscribe(async (message) => {
  const { searchTerm } = message.payload;

  return {
    response: await getGeolocations(searchTerm),
  };
});
