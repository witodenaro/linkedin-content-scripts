"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addConnectionsMessenger = void 0;
const ContentScriptMessenger_1 = require("src/ContentScriptMessenger/ContentScriptMessenger");
class AddConnectionsMessenger extends ContentScriptMessenger_1.ContentScriptMessenger {
}
exports.addConnectionsMessenger = new AddConnectionsMessenger();
