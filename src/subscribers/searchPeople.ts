import { searchPeople } from "linkedin-api-adapter";
import { searchPeopleMessenger } from "src/messengers/SearchPeopleMessenger";

searchPeopleMessenger.subscribe(async (message) => {
  return {
    response: await searchPeople(message.payload),
  };
});
