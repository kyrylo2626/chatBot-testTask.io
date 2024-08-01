import mongoose from "mongoose";
import { Chat } from "./chat.model";


const MessageSchema = new mongoose.Schema(
    {   
        chat: { type: mongoose.Schema.Types.ObjectId, ref: Chat, required: [true, 'Please enter chat id'] },
        from_bot: { type: Boolean, default: false },
        text: { type: String, required: [true, 'Please enter text message'] },
        edited: { type: Boolean, default: false }
    },
    { timestamps: true }
)


export const Message = mongoose.model('Message', MessageSchema);
