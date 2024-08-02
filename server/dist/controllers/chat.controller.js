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
exports.getLatestMessageChats = exports.deleteChat = exports.updateChat = exports.createChat = exports.getChat = exports.getChats = void 0;
const chat_model_1 = require("../models/chat.model");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const mongoose_1 = __importDefault(require("mongoose"));
const message_controller_1 = require("./message.controller");
const getChats = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.Types.ObjectId.isValid(req.params.id)) {
        const chats = yield chat_model_1.Chat.find({ user: req.params.id }).exec();
        if (!chats)
            res.status(404).json('Chat not found');
        res.status(200).json(chats);
    }
    else {
        res.status(200).json('Chat id is not valid');
    }
}));
exports.getChats = getChats;
const getChat = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.Types.ObjectId.isValid(req.params.id)) {
        const chat = yield chat_model_1.Chat.findById(req.params.id);
        if (!chat)
            res.status(404).json('Chat not found');
        res.status(200).json(chat);
    }
    else {
        res.status(200).json('Chat id is not valid');
    }
}));
exports.getChat = getChat;
const getLatestMessageChats = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.Types.ObjectId.isValid(req.params.id)) {
        const chats = yield chat_model_1.Chat.find({ user: req.params.id }).exec();
        if (!chats)
            res.status(404).json('Chats not found');
        const messages = yield (0, message_controller_1.getLatestMessages)(chats);
        res.status(200).json(messages);
    }
    else {
        res.status(200).json('Chats id is not valid');
    }
}));
exports.getLatestMessageChats = getLatestMessageChats;
const createChat = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const chat = yield chat_model_1.Chat.create(req.body.newChat);
    res.status(200).json(chat);
}));
exports.createChat = createChat;
const updateChat = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.Types.ObjectId.isValid(req.params.id)) {
        const chat = yield chat_model_1.Chat.findByIdAndUpdate(req.params.id, req.body.updChat);
        if (!chat)
            res.status(404).json('Chat not found');
        res.status(200).json('Chat update successfully');
    }
    else {
        res.status(200).json('Chat id is not valid');
    }
}));
exports.updateChat = updateChat;
const deleteChat = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.Types.ObjectId.isValid(req.params.id)) {
        const chat = yield chat_model_1.Chat.findByIdAndDelete(req.params.id);
        if (!chat)
            res.status(404).json('Chat not found');
        res.status(200).json('Chat deleted successfully');
    }
    else {
        res.status(200).json('Chat id is not valid');
    }
}));
exports.deleteChat = deleteChat;
