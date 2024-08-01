import { Chat } from '../models/chat.model';
import asyncHandler from 'express-async-handler';
import mongoose from "mongoose";
import { getLatestMessages } from './message.controller';


const getChats = asyncHandler(async (req, res, next) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const chats = await Chat.find({ user: req.params.id }).exec();
        if (!chats) res.status(404).json('Chat not found');
        res.status(200).json(chats);
    } else {
        res.status(200).json('Chat id is not valid');
    }
})

const getChat = asyncHandler(async (req, res, next) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const chat = await Chat.findById(req.params.id);
        if (!chat) res.status(404).json('Chat not found');
        res.status(200).json(chat);
    } else {
        res.status(200).json('Chat id is not valid');
    }
})

const getLatestMessageChats = asyncHandler(async (req, res, next) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const chats = await Chat.find({ user: req.params.id }).exec();
        if (!chats) res.status(404).json('Chats not found');
        const messages = await getLatestMessages(chats);
        res.status(200).json(messages);
    } else {
        res.status(200).json('Chats id is not valid');
    }
})

const createChat = asyncHandler(async (req, res, next) => {
    const chat = await Chat.create(req.body.newChat);
    res.status(200).json(chat);
})

const updateChat = asyncHandler(async (req, res, next) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const chat = await Chat.findByIdAndUpdate(req.params.id, req.body.updChat);
        if (!chat) res.status(404).json('Chat not found');
        res.status(200).json('Chat update successfully');
    } else {
        res.status(200).json('Chat id is not valid');
    }
})

const deleteChat = asyncHandler(async (req, res, next) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const chat = await Chat.findByIdAndDelete(req.params.id);
        if (!chat) res.status(404).json('Chat not found');
        res.status(200).json('Chat deleted successfully');
    } else {
        res.status(200).json('Chat id is not valid');
    }
    
})


export { getChats, getChat, createChat, updateChat, deleteChat, getLatestMessageChats }


