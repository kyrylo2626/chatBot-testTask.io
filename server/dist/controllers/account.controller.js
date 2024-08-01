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
exports.deleteAccount = exports.updateAccount = exports.createAccount = exports.getAccount = exports.getAccounts = void 0;
const account_model_1 = require("../models/account.model");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const mongoose_1 = __importDefault(require("mongoose"));
const getAccounts = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const accounts = yield account_model_1.Account.find({});
    res.status(200).json(accounts);
}));
exports.getAccounts = getAccounts;
const getAccount = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.Types.ObjectId.isValid(req.params.id)) {
        const account = yield account_model_1.Account.findById(req.params.id);
        if (!account)
            res.status(404).json('Account not found');
        res.status(200).json(account);
    }
    else {
        res.status(200).json('Account id is not valid');
    }
}));
exports.getAccount = getAccount;
const createAccount = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const account = yield account_model_1.Account.create(req.body);
    res.status(200).json(account);
}));
exports.createAccount = createAccount;
const updateAccount = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.Types.ObjectId.isValid(req.params.id)) {
        const account = yield account_model_1.Account.findByIdAndUpdate(req.params.id, req.body);
        if (!account)
            res.status(404).json('Account not found');
        res.status(200).json('Account update successfully');
    }
    else {
        res.status(200).json('Account id is not valid');
    }
}));
exports.updateAccount = updateAccount;
const deleteAccount = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.Types.ObjectId.isValid(req.params.id)) {
        const account = yield account_model_1.Account.findByIdAndDelete(req.params.id);
        if (!account)
            res.status(404).json('Account not found');
        res.status(200).json('Account deleted successfully');
    }
    else {
        res.status(200).json('Account id is not valid');
    }
}));
exports.deleteAccount = deleteAccount;
