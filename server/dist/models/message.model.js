"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const chat_model_1 = require("./chat.model");
const MessageSchema = new mongoose_1.default.Schema({
    chat: { type: mongoose_1.default.Schema.Types.ObjectId, ref: chat_model_1.Chat, required: [true, 'Please enter chat id'] },
    from_bot: { type: Boolean, default: false },
    text: { type: String, required: [true, 'Please enter text message'] },
    edited: { type: Boolean, default: false }
}, { timestamps: true });
exports.Message = mongoose_1.default.model('Message', MessageSchema);
