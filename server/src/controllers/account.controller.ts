import { Account } from '../models/account.model';
import asyncHandler from 'express-async-handler';
import mongoose from "mongoose";


const getAccounts = asyncHandler(async (req, res, next) => {
    const accounts = await Account.find({});
    res.status(200).json(accounts);
})

const getAccount = asyncHandler(async (req, res, next) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const account = await Account.findById(req.params.id);
        if (!account) res.status(404).json('Account not found');
        res.status(200).json(account);
    } else {
        res.status(200).json('Account id is not valid');
    }
})

const createAccount = asyncHandler(async (req, res, next) => {
    const account = await Account.create(req.body);
    res.status(200).json(account);
})

const updateAccount = asyncHandler(async (req, res, next) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const account = await Account.findByIdAndUpdate(req.params.id, req.body);
        if (!account) res.status(404).json('Account not found');
        res.status(200).json('Account update successfully');
    } else {
        res.status(200).json('Account id is not valid');
    }
})

const deleteAccount = asyncHandler(async (req, res, next) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const account = await Account.findByIdAndDelete(req.params.id);
        if (!account) res.status(404).json('Account not found');
        res.status(200).json('Account deleted successfully');
    } else {
        res.status(200).json('Account id is not valid');
    }
    
})


export { getAccounts, getAccount, createAccount, updateAccount, deleteAccount }


