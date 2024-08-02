"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = require("./user.model");
const ChatSchema = new mongoose_1.default.Schema({
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: user_model_1.User, required: [true, 'Please enter members id'] },
    name: { type: String, required: [true, 'Please enter chat name'] }
}, { timestamps: true });
exports.Chat = mongoose_1.default.model('Chat', ChatSchema);
