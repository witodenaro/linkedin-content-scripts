import type { UserProfile } from "linkedin-api-adapter";
import { ContentScriptMessenger } from "src/ContentScriptMessenger/ContentScriptMessenger";

interface Payload {
  profileUrn: string;
}

class GetProfileMessenger extends ContentScriptMessenger<
  Payload,
  UserProfile
> {}

const getProfileMessenger = new GetProfileMessenger();

export { getProfileMessenger };
