"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const account_controller_1 = require("../controllers/account.controller");
const router = express_1.default.Router();
exports.router = router;
// GET All Accounts
router.get('/', account_controller_1.getAccounts);
// GET One Account
router.get('/:id', account_controller_1.getAccount);
// Create Account
router.post('/', account_controller_1.createAccount);
// Update Account
router.patch('/:id', account_controller_1.updateAccount);
// Delete Account
router.delete('/:id', account_controller_1.deleteAccount);
