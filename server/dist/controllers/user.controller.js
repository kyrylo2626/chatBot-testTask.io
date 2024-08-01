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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const user_model_1 = require("../models/user.model");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const mongoose_1 = __importDefault(require("mongoose"));
const getUsers = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.User.find({});
    res.status(200).json(users);
}));
exports.getUsers = getUsers;
const getUser = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.Types.ObjectId.isValid(req.params.id)) {
        const user = yield user_model_1.User.findById(req.params.id);
        if (!user)
            res.status(404).json('User not found');
        res.status(200).json(user);
    }
    else {
        res.status(200).json('User id is not valid');
    }
}));
exports.getUser = getUser;
const createUser = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.create(req.body);
    res.status(200).json(user);
}));
exports.createUser = createUser;
const updateUser = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.Types.ObjectId.isValid(req.params.id)) {
        const user = yield user_model_1.User.findByIdAndUpdate(req.params.id, req.body);
        if (!user)
            res.status(404).json('User not found');
        res.status(200).json('User update successfully');
    }
    else {
        res.status(200).json('User id is not valid');
    }
}));
exports.updateUser = updateUser;
const deleteUser = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.Types.ObjectId.isValid(req.params.id)) {
        const user = yield user_model_1.User.findByIdAndDelete(req.params.id);
        if (!user)
            res.status(404).json('User not found');
        res.status(200).json('User deleted successfully');
    }
    else {
        res.status(200).json('User id is not valid');
    }
}));
exports.deleteUser = deleteUser;
