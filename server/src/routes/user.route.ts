import express from 'express';
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/user.controller';

const router = express.Router();

// GET All Users
router.get('/', getUsers);

// GET One User
router.get('/:id', getUser);

// Create User
router.post('/', createUser);

// Update User
router.patch('/:id', updateUser);

// Delete User
router.delete('/:id', deleteUser);


export { router }