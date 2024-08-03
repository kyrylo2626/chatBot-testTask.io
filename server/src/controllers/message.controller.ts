import { Message } from '../models/message.model';
import { Chat } from '../models/chat.model'
import asyncHandler from 'express-async-handler';
import mongoose from "mongoose";


const getMessages = asyncHandler(async (req, res, next) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const messages = await Message.find({ chat: req.params.id }).exec();
        if (!messages) res.status(404).json('Messages not found');
        res.status(200).json(messages);
    } else {
        res.status(200).json('Message id is not valid');
    }
})


const getMessage = asyncHandler(async (req, res, next) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const message = await Message.findById(req.params.id);
        if (!message) res.status(404).json('Message not found');
        res.status(200).json(message);
    } else {
        res.status(200).json('Message id is not valid');
    }
})

const getLatestMessages = async (chat_ids: any[]) => {
    const messages: any[] = [];
    for (const item of chat_ids) {
        if (mongoose.Types.ObjectId.isValid(item)) {
            const foundMessages = await Message.find({ chat: item._id }).sort({ createdAt: -1 }).exec();
            const chat_name = await Chat.findById(item._id);
            const lastMessage = { message: foundMessages[0], chat_name: chat_name?.name }
            messages.push(lastMessage);
        }
    }
    return messages
}

const createMessage = asyncHandler(async (req, res, next) => {
    const message = await Message.create(req.body.newMessage);
    await Chat.findByIdAndUpdate(message.chat, { updatedAt: message.createdAt });
    res.status(200).json(message);
})

const updateMessage = asyncHandler(async (req, res, next) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const message = await Message.findByIdAndUpdate(req.params.id, req.body.updMessage);
        if (!message) res.status(404).json('Message not found');
        res.status(200).json('Message update successfully');
    } else {
        res.status(200).json('Message id is not valid');
    }
})

const deleteMessage = asyncHandler(async (req, res, next) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const message = await Message.findByIdAndDelete(req.params.id);
        if (!message) res.status(404).json('Message not found');
        res.status(200).json('Message deleted successfully');
    } else {
        res.status(200).json('Message id is not valid');
    }
    
})


export { getMessages, getMessage, getLatestMessages, createMessage, updateMessage, deleteMessage }


