"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const chat_controller_1 = require("../controllers/chat.controller");
const router = express_1.default.Router();
exports.router = router;
// GET All User Chats
router.get('/all/:id', chat_controller_1.getChats);
// GET One Chat
router.get('/one/:id', chat_controller_1.getChat);
// GET Latetst Message Chats
router.get('/last/:id', chat_controller_1.getLatestMessageChats);
// Create Chat
router.post('/', chat_controller_1.createChat);
// Update Chat
router.patch('/:id', chat_controller_1.updateChat);
// Delete Chat
router.delete('/:id', chat_controller_1.deleteChat);
