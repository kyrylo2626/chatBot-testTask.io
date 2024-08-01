import express from 'express';
import { getMessages, getMessage, createMessage, updateMessage, deleteMessage } from '../controllers/message.controller';

const router = express.Router();

// GET All Messages
router.get('/all/:id', getMessages);

// GET One Message
router.get('/one/:id', getMessage);

// Create Message
router.post('/', createMessage);

// Update Message
router.patch('/:id', updateMessage);

// Delete Message
router.delete('/:id', deleteMessage);


export { router }