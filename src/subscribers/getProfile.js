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
const GetProfileMessenger_1 = require("src/messengers/GetProfileMessenger");
GetProfileMessenger_1.getProfileMessenger.subscribe((message) => __awaiter(void 0, void 0, void 0, function* () {
    const { profileUrn } = message.payload;
    return {
        response: yield (0, linkedin_api_adapter_1.getProfile)(profileUrn),
    };
}));
