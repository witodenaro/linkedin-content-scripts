"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstConnectionsMessenger = void 0;
const ContentScriptMessenger_1 = require("src/ContentScriptMessenger/ContentScriptMessenger");
class FetchConnectionsMessenger extends ContentScriptMessenger_1.ContentScriptMessenger {
}
const firstConnectionsMessenger = new FetchConnectionsMessenger();
exports.firstConnectionsMessenger = firstConnectionsMessenger;
