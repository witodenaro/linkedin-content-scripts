"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPeopleMessenger = void 0;
const ContentScriptMessenger_1 = require("src/ContentScriptMessenger/ContentScriptMessenger");
class SearchPeopleMessenger extends ContentScriptMessenger_1.ContentScriptMessenger {
}
const searchPeopleMessenger = new SearchPeopleMessenger();
exports.searchPeopleMessenger = searchPeopleMessenger;
