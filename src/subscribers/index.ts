export async function subscribe() {
  import("./addConnection");
  import("./firstConnections");
  import("./getGeolocations");
  import("./getProfile");
  import("./getCurrentUserProfile");
  import("./removeConnection");
  import("./searchPeople");
  import("./getConnectionsCount");
  return true;
}
