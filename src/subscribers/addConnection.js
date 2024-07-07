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
const linkedin_api_adapter_1 = require("linkedin-api-adapter");
const AddConnectionMessenger_1 = require("src/messengers/AddConnectionMessenger");
AddConnectionMessenger_1.addConnectionsMessenger.subscribe((message) => __awaiter(void 0, void 0, void 0, function* () {
    const { profileUrn, options } = message.payload;
    yield (0, linkedin_api_adapter_1.addConnection)(profileUrn, options);
    return {
        response: undefined,
    };
}));
