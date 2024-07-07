"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfileMessenger = void 0;
const ContentScriptMessenger_1 = require("src/ContentScriptMessenger/ContentScriptMessenger");
class GetProfileMessenger extends ContentScriptMessenger_1.ContentScriptMessenger {
}
const getProfileMessenger = new GetProfileMessenger();
exports.getProfileMessenger = getProfileMessenger;
