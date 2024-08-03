import mongoose from "mongoose";
import { User } from "./user.model"; 
import { Message } from './message.model';


const ChatSchema = new mongoose.Schema(
    {
        user:  { type: mongoose.Schema.Types.ObjectId, ref: User, required: [true, 'Please enter members id'] },
        name: { type: String, required: [true, 'Please enter chat name'] }
    },
    { timestamps: true }
)


export const Chat = mongoose.model('Chat', ChatSchema);
