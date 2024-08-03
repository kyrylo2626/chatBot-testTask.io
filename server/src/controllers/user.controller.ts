import { User } from '../models/user.model';
import asyncHandler from 'express-async-handler';
import mongoose from "mongoose";


const getUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find({});
    res.status(200).json(users);
})

const getUser = asyncHandler(async (req, res, next) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const user = await User.findById(req.params.id);
        if (!user) res.status(404).json('User not found');
        res.status(200).json(user);
    } else {
        res.status(200).json('User id is not valid');
    }
})

const createUser = asyncHandler(async (req, res, next) => {
    const user = await User.create(req.body);
    res.status(200).json(user);
})

const updateUser = asyncHandler(async (req, res, next) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        if (!user) res.status(404).json('User not found');
        res.status(200).json('User update successfully');
    } else {
        res.status(200).json('User id is not valid');
    }
})

const deleteUser = asyncHandler(async (req, res, next) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) res.status(404).json('User not found');
        res.status(200).json('User deleted successfully');
    } else {
        res.status(200).json('User id is not valid');
    }
    
})


export { getUsers, getUser, createUser, updateUser, deleteUser }


