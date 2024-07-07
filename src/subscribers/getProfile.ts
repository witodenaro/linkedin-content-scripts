import { getProfile } from "linkedin-api-adapter";
import { getProfileMessenger } from "../messengers/GetProfileMessenger";

getProfileMessenger.subscribe(async (payload) => {
  const { profileUrn } = payload;

  return await getProfile(profileUrn);
});
