"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGeolocationsMessenger = void 0;
const ContentScriptMessenger_1 = require("src/ContentScriptMessenger/ContentScriptMessenger");
class GetGeolocationsMessenger extends ContentScriptMessenger_1.ContentScriptMessenger {
}
const getGeolocationsMessenger = new GetGeolocationsMessenger();
exports.getGeolocationsMessenger = getGeolocationsMessenger;
