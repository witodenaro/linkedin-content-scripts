"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUserProfileMessenger = void 0;
const ContentScriptMessenger_1 = require("src/ContentScriptMessenger/ContentScriptMessenger");
class GetCurrentUserProfileMessenger extends ContentScriptMessenger_1.ContentScriptMessenger {
}
const getCurrentUserProfileMessenger = new GetCurrentUserProfileMessenger();
exports.getCurrentUserProfileMessenger = getCurrentUserProfileMessenger;
