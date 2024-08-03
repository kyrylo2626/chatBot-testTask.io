import mongoose from "mongoose";
import { Account } from "./account.model";


const UserSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Account,
            unique: true,
            required: [true, 'Please enter user id']
        },
        first_name: { type: String, required: [true, 'Please enter first name'] },
        last_name: { type: String, required: [true, 'Please enter last name'] },
        sex: { type: String, required: [true, 'Please enter sex'] },
        online: { type: Boolean, default: false }
    },
    { timestamps: true }
)


export const User = mongoose.model('User', UserSchema);
