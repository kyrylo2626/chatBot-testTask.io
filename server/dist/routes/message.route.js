"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const message_controller_1 = require("../controllers/message.controller");
const router = express_1.default.Router();
exports.router = router;
// GET All Messages
router.get('/all/:id', message_controller_1.getMessages);
// GET One Message
router.get('/one/:id', message_controller_1.getMessage);
// Create Message
router.post('/', message_controller_1.createMessage);
// Update Message
router.patch('/:id', message_controller_1.updateMessage);
// Delete Message
router.delete('/:id', message_controller_1.deleteMessage);
