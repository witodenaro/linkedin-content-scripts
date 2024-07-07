import { getGeolocations } from "linkedin-api-adapter";
import { getGeolocationsMessenger } from "../messengers/GetGeolocationsMessenger";

export const subscribe = () => {
  getGeolocationsMessenger.subscribe(async (payload) => {
    const { searchTerm } = payload;

    return await getGeolocations(searchTerm);
  });
};
