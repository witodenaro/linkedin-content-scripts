import { getConnectionsCount } from "linkedin-api-adapter"
import { getConnectionsCountMessenger } from "src/messengers/GetConnectionsCountMessenger"

getConnectionsCountMessenger.subscribe(async (message) => {
  const { vanityName } = message.payload

   const profile = await getConnectionsCount(vanityName)

   return {
    response: profile
   }
})
