"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestActiveTab = requestActiveTab;
function requestActiveTab(message) {
    return __awaiter(this, void 0, void 0, function* () {
        const tab = yield getActiveTab();
        return yield sendTabMessage(tab.id, message);
    });
}
function getActiveTab() {
    return __awaiter(this, void 0, void 0, function* () {
        const tabs = yield getActiveTabs();
        const tab = tabs[0];
        if (!(tab === null || tab === void 0 ? void 0 : tab.id)) {
            throw new Error("No active tab found");
        }
        return tab;
    });
}
function getActiveTabs() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield chrome.tabs.query({ active: true, currentWindow: true });
    });
}
function sendTabMessage(tabId, message) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield chrome.tabs.sendMessage(tabId, message);
    });
}
