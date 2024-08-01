"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.default.Router();
exports.router = router;
// GET All Users
router.get('/', user_controller_1.getUsers);
// GET One User
router.get('/:id', user_controller_1.getUser);
// Create User
router.post('/', user_controller_1.createUser);
// Update User
router.patch('/:id', user_controller_1.updateUser);
// Delete User
router.delete('/:id', user_controller_1.deleteUser);
