import { getProfile } from "linkedin-api-adapter";
import { getProfileMessenger } from "src/messengers/GetProfileMessenger";

getProfileMessenger.subscribe(async (payload) => {
  const { profileUrn } = payload;

  return await getProfile(profileUrn);
});
