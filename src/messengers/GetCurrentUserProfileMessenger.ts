import type { UserProfile } from "linkedin-api-adapter";
import { ContentScriptMessenger } from "src/ContentScriptMessenger/ContentScriptMessenger";

class GetCurrentUserProfileMessenger extends ContentScriptMessenger<void, UserProfile> {}

const getCurrentUserProfileMessenger = new GetCurrentUserProfileMessenger();

export { getCurrentUserProfileMessenger };
