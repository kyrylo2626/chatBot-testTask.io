import express from 'express';
import { getChats, getChat, createChat, updateChat, deleteChat, getLatestMessageChats } from '../controllers/chat.controller';

const router = express.Router();

// GET All User Chats
router.get('/all/:id', getChats);

// GET One Chat
router.get('/one/:id', getChat);

// GET Latetst Message Chats
router.get('/last/:id', getLatestMessageChats);

// Create Chat
router.post('/', createChat);

// Update Chat
router.patch('/:id', updateChat);

// Delete Chat
router.delete('/:id', deleteChat);


export { router }