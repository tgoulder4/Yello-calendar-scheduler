"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const eventSchema = new Schema({
    id: Schema.Types.ObjectId,
    name: String,
    description: String,
    color: String,
    priority: Number,
    userID: Schema.Types.ObjectId,
    startTime: Date,
    endTime: Date,
});
exports.default = eventSchema;
