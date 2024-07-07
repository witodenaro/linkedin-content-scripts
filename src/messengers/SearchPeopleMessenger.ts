import { SearchedPersonEntity } from "linkedin-api-adapter/dist/requests/searchPeople/types";
import { ContentScriptMessenger } from "src/ContentScriptMessenger/ContentScriptMessenger";

interface Payload {
  count: number;
  start: number;
  geoUrns?: string[];
  keywords: string;
}

class SearchPeopleMessenger extends ContentScriptMessenger<
  Payload,
  SearchedPersonEntity[]
> {}

const searchPeopleMessenger = new SearchPeopleMessenger();

export { searchPeopleMessenger };
