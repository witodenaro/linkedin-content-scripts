import { searchPeople } from "linkedin-api-adapter";
import { searchPeopleMessenger } from "../messengers/SearchPeopleMessenger";

export const subscribe = () => {
  searchPeopleMessenger.subscribe(async (payload) => {
    return await searchPeople(payload);
  });
};
