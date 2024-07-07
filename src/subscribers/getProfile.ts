import { getProfile } from "linkedin-api-adapter";
import { getProfileMessenger } from "src/messengers/GetProfileMessenger";

getProfileMessenger.subscribe(async (message) => {
  const { profileUrn } = message.payload;

  return {
    response: await getProfile(profileUrn),
  };
});
