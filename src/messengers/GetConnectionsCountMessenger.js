"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnectionsCountMessenger = void 0;
const ContentScriptMessenger_1 = require("src/ContentScriptMessenger/ContentScriptMessenger");
class GetConnectionsCountMessenger extends ContentScriptMessenger_1.ContentScriptMessenger {
}
const getConnectionsCountMessenger = new GetConnectionsCountMessenger();
exports.getConnectionsCountMessenger = getConnectionsCountMessenger;
