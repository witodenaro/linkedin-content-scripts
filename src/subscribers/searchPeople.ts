import { searchPeople } from "linkedin-api-adapter";
import { searchPeopleMessenger } from "../messengers/SearchPeopleMessenger";

searchPeopleMessenger.subscribe(async (payload) => {
  return await searchPeople(payload);
});
