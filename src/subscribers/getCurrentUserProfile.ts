import { getCurrentUserProfile } from "linkedin-api-adapter";
import { getCurrentUserProfileMessenger } from "../messengers/GetCurrentUserProfileMessenger";

getCurrentUserProfileMessenger.subscribe(async () => {
  return await getCurrentUserProfile();
});
