import mongoose from "mongoose";
import { User } from "./user.model"; 


const AccountSchema = new mongoose.Schema(
    {
        email: { type: String, unique: true, required: [true, 'Please enter email'] },
        password: { type: String, required: [true, 'Please enter password'] },
        google: { type: Boolean, default: false },
        facebook: { type: Boolean, default: false },
    },
    { timestamps: true }
)


export const Account = mongoose.model('Account', AccountSchema);