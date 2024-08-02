"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const AccountSchema = new mongoose_1.default.Schema({
    email: { type: String, unique: true, required: [true, 'Please enter email'] },
    password: { type: String, required: [true, 'Please enter password'] },
    google: { type: Boolean, default: false },
    facebook: { type: Boolean, default: false },
}, { timestamps: true });
exports.Account = mongoose_1.default.model('Account', AccountSchema);
