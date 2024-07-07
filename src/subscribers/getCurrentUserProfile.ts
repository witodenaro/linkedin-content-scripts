import { getCurrentUserProfile } from "linkedin-api-adapter";
import { getCurrentUserProfileMessenger } from "src/messengers/GetCurrentUserProfileMessenger";

getCurrentUserProfileMessenger.subscribe(async () => {
  return await getCurrentUserProfile();
});
