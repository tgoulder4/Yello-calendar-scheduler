"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const userSchema = new Schema({
    id: Schema.Types.ObjectId,
    username: String,
    password: String,
    displayname: String,
    events: [
        {
            id: Schema.Types.ObjectId,
            name: String,
            startTime: Date,
            description: String,
            endTime: Date,
        },
    ],
});
