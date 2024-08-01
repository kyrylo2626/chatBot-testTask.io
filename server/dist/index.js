"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const account_route_1 = require("./routes/account.route");
const user_route_1 = require("./routes/user.route");
const chat_route_1 = require("./routes/chat.route");
const message_route_1 = require("./routes/message.route");
dotenv_1.default.config();
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
// routes
app.use("/api/accounts", account_route_1.router);
app.use("/api/users", user_route_1.router);
app.use("/api/chats", chat_route_1.router);
app.use("/api/messages", message_route_1.router);
mongoose_1.default.connect(process.env.DATABASE_URL).then(() => {
    console.log('Database connected successfully');
    app.listen(process.env.PORT, () => { console.log('Server connected successfully'); });
}).catch((error) => console.log(error));
