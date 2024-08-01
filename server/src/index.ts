import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import { router as AccountRoute } from './routes/account.route';
import { router as UserRoute } from './routes/user.route';
import { router as ChatRoute } from './routes/chat.route';
import { router as MessageRoute } from './routes/message.route';


dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// routes
app.use("/api/accounts", AccountRoute);
app.use("/api/users", UserRoute);
app.use("/api/chats", ChatRoute);
app.use("/api/messages", MessageRoute);


mongoose.connect(process.env.DATABASE_URL!).then(() => {
    console.log('Database connected successfully');
    app.listen(process.env.PORT!, () => { console.log('Server connected successfully') });
}).catch((error) => console.log(error) )