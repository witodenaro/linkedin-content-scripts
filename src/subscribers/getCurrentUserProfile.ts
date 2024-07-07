import { getCurrentUserProfile } from "linkedin-api-adapter";
import { getCurrentUserProfileMessenger } from "../messengers/GetCurrentUserProfileMessenger";

export const subscribe = () => {
  getCurrentUserProfileMessenger.subscribe(async () => {
    return await getCurrentUserProfile();
  });
};
