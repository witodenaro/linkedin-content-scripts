import type { UserProfile } from "linkedin-api-adapter";
import { ContentScriptMessenger } from "../ContentScriptMessenger/ContentScriptMessenger";

class GetCurrentUserProfileMessenger extends ContentScriptMessenger<
  void,
  UserProfile
> {
  constructor() {
    super("GET_CURRENT_USER_PROFILE");
  }
}

const getCurrentUserProfileMessenger = new GetCurrentUserProfileMessenger();

export { getCurrentUserProfileMessenger };
