import express from 'express';
import { getAccounts, getAccount, createAccount, updateAccount, deleteAccount } from '../controllers/account.controller';

const router = express.Router();

// GET All Accounts
router.get('/', getAccounts);

// GET One Account
router.get('/:id', getAccount);

// Create Account
router.post('/', createAccount);

// Update Account
router.patch('/:id', updateAccount);

// Delete Account
router.delete('/:id', deleteAccount);


export { router }