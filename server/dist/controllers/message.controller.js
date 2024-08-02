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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessage = exports.updateMessage = exports.createMessage = exports.getLatestMessages = exports.getMessage = exports.getMessages = void 0;
const message_model_1 = require("../models/message.model");
const chat_model_1 = require("../models/chat.model");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const mongoose_1 = __importDefault(require("mongoose"));
const getMessages = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.Types.ObjectId.isValid(req.params.id)) {
        const messages = yield message_model_1.Message.find({ chat: req.params.id }).exec();
        if (!messages)
            res.status(404).json('Messages not found');
        res.status(200).json(messages);
    }
    else {
        res.status(200).json('Message id is not valid');
    }
}));
exports.getMessages = getMessages;
const getMessage = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.Types.ObjectId.isValid(req.params.id)) {
        const message = yield message_model_1.Message.findById(req.params.id);
        if (!message)
            res.status(404).json('Message not found');
        res.status(200).json(message);
    }
    else {
        res.status(200).json('Message id is not valid');
    }
}));
exports.getMessage = getMessage;
const getLatestMessages = (chat_ids) => __awaiter(void 0, void 0, void 0, function* () {
    const messages = [];
    for (const item of chat_ids) {
        if (mongoose_1.default.Types.ObjectId.isValid(item)) {
            const foundMessages = yield message_model_1.Message.find({ chat: item._id }).sort({ createdAt: -1 }).exec();
            const chat_name = yield chat_model_1.Chat.findById(item._id);
            const lastMessage = { message: foundMessages[0], chat_name: chat_name === null || chat_name === void 0 ? void 0 : chat_name.name };
            messages.push(lastMessage);
        }
    }
    return messages;
});
exports.getLatestMessages = getLatestMessages;
const createMessage = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const message = yield message_model_1.Message.create(req.body.newMessage);
    res.status(200).json(message);
}));
exports.createMessage = createMessage;
const updateMessage = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.Types.ObjectId.isValid(req.params.id)) {
        const message = yield message_model_1.Message.findByIdAndUpdate(req.params.id, req.body);
        if (!message)
            res.status(404).json('Message not found');
        res.status(200).json('Message update successfully');
    }
    else {
        res.status(200).json('Message id is not valid');
    }
}));
exports.updateMessage = updateMessage;
const deleteMessage = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.Types.ObjectId.isValid(req.params.id)) {
        const message = yield message_model_1.Message.findByIdAndDelete(req.params.id);
        if (!message)
            res.status(404).json('Message not found');
        res.status(200).json('Message deleted successfully');
    }
    else {
        res.status(200).json('Message id is not valid');
    }
}));
exports.deleteMessage = deleteMessage;
