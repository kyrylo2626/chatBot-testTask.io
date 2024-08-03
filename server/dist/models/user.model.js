"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const account_model_1 = require("./account.model");
const UserSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: account_model_1.Account,
        unique: true,
        required: [true, 'Please enter user id']
    },
    first_name: { type: String, required: [true, 'Please enter first name'] },
    last_name: { type: String, required: [true, 'Please enter last name'] },
    sex: { type: String, required: [true, 'Please enter sex'] },
    online: { type: Boolean, default: false }
}, { timestamps: true });
exports.User = mongoose_1.default.model('User', UserSchema);
