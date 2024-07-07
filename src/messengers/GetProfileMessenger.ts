import type { UserProfile } from "linkedin-api-adapter";
import { ContentScriptMessenger } from "../ContentScriptMessenger/ContentScriptMessenger";

interface Payload {
  profileUrn: string;
}

class GetProfileMessenger extends ContentScriptMessenger<
  Payload,
  UserProfile
> {
  constructor() {
    super("GET_PROFILE");
  }
}

const getProfileMessenger = new GetProfileMessenger();

export { getProfileMessenger };
