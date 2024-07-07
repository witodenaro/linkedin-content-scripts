"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeConnectionMessenger = void 0;
const ContentScriptMessenger_1 = require("src/ContentScriptMessenger/ContentScriptMessenger");
class RemoveConnectionMessenger extends ContentScriptMessenger_1.ContentScriptMessenger {
}
const removeConnectionMessenger = new RemoveConnectionMessenger();
exports.removeConnectionMessenger = removeConnectionMessenger;
