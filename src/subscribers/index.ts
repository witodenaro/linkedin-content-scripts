import * as AddConnections from "./addConnection";
import * as FirstConnections from "./firstConnections";
import * as GetConnectionsCount from "./getConnectionsCount";
import * as GetCurrentUserProfile from "./getCurrentUserProfile";
import * as GetGeolocations from "./getGeolocations";
import * as GetProfile from "./getProfile";
import * as RemoveConnection from "./removeConnection";
import * as SearchPeople from "./searchPeople";

export async function subscribe() {
  AddConnections.subscribe();
  FirstConnections.subscribe();
  GetConnectionsCount.subscribe();
  GetCurrentUserProfile.subscribe();
  GetGeolocations.subscribe();
  GetProfile.subscribe();
  RemoveConnection.subscribe();
  SearchPeople.subscribe();
  return true;
}
